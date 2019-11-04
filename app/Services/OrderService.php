<?php
/**
 * Created by PhpStorm.
 * User: samxiao
 * Date: 2017/9/11
 * Time: 下午1:16
 */

namespace App\Services;


use App\Events\Order\CanceledEvent;
use App\Events\Order\CreatedEvent;
use App\Events\Order\PaidEvent;
use App\Models\Coupon;
use App\Models\Order;
use App\Models\OrderProducts;
use App\Models\Products;
use App\Models\Property;
use App\Models\Stores;
use App\User;
use EasyWeChat\Payment\Order as WeChatOrder;
use Symfony\Component\HttpKernel\Exception\HttpException;

class OrderService
{
    protected $amapService;
    protected $couponService;

    public function __construct(AmapService $amapService, CouponService $couponService)
    {
        $this->amapService = $amapService;
        $this->couponService = $couponService;
    }

    /**
     *
     * 支付订单
     * 订单支付完成后 触发
     *
     * @param Order $order
     * @return bool
     * @throws \Exception
     */
    public function payOrder(Order $order)
    {
        if ($order->paid_at == null) { //过滤重复支付的问题
            $order->status = 5;
            $order->paid_at = date('Y-m-d H:i:s');
            if (!$order->save()) {
                throw new \Exception(json_encode($order->getErrors()));
            } else {
                /** 分发订单支付成功事件 */
                event(new PaidEvent($order));
                return true;
            }
        } else {
            return true;
        }
    }

    protected function getOrderBySn($orderSN)
    {
        return Order::find(['sn' => $orderSN]);
    }


    /**
     * 创建基础订单
     *
     * @param array $data
     * @return Order
     * @throws \Exception
     */
    protected function insertOrder(array $data)
    {
        $model = new Order();
        $model->fill($data);
        $model->status = 0;
        $model->delivery_desc = date('H:i', time() + 2400) . '之前';             //当前时间后四十分钟
        if (!$model->save()) {
            \Log::debug(json_encode($model->getErrors(), JSON_UNESCAPED_UNICODE));
            throw new \Exception('订单保存失败');
        } else {
            \Log::debug('订单添加成功');
            \Log::debug(json_encode($model->toArray(), JSON_UNESCAPED_UNICODE));
        }
        return $model;
    }

    /**
     * 添加微信订单
     *
     * @param Order $order
     * @param $open_id
     * @return array
     * @throws \Exception
     */
    public function addWeChatOrder(Order $order, $open_id)
    {

        $order = new WeChatOrder([
            'trade_type' => 'JSAPI', // JSAPI，NATIVE，APP...
            'device_info' => 'wechat',
            'body' => '小宝栗子',
            'detail' => '小宝栗子',
            'out_trade_no' => $order->sn,
            'total_fee' => round($order->total * 100), // 单位：分
            'notify_url' => 'https://admin.xbs.daxuefun.cn/wechat/pay-callback', // 支付结果通知网址，如果不设置则会使用配置里的默认地址
            'openid' => $open_id, // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，
        ]);
        $payment = \EasyWeChat::payment();
        $result = $payment->prepare($order);
        \Log::debug(json_encode($result, JSON_UNESCAPED_UNICODE));
        if ($result->return_code == 'SUCCESS' && $result->result_code == 'SUCCESS') {
            $orderConfig = $payment->configForJSSDKPayment($result->prepay_id);
        } else {
            throw new \Exception('微信支付生成失败');
        }
        return $orderConfig;
    }

    /**
     * 添加订单商品
     *
     * @param Order $order
     * @param array $detailData
     * @return array
     * @throws \Exception
     */
    protected function addOrderDetail(Order $order, array $detailData)
    {
        $property = $this->getProperty();
        $total = 0;
        $productTotal = 0;
        $shippingRate = 0.2;
        foreach ($detailData as $productData) {
            if ($productData['quantity'] > 0) {
                $productTotal += $productData['quantity'];
                $product = Products::where('id', '=', $productData['id'])->first();
                if (!$product) {
                    throw new \Exception('订单生成失败-商品未找到(id=' . $product['id'] . ')');
                }
                /** 对应处理库存 */
                if ($product->inventory != -1) {
                    if ($product->inventory - $product['quantity'] < 0) {
                        throw new \Exception('订单生成失败-商品' . $product->name . '库存不足！');
                    }
                    $product->inventory = $product->inventory - $product['quantity'];
                    $product->save();
                }
                /** @var  $orderProduct */
                $orderProduct = new OrderProducts();
                $orderProduct->orders_id = $order->id;
                $orderProduct->products_id = $product->id;
                $orderProduct->price = $product->price;
                $orderProduct->quantity = $productData['quantity'];
                $orderProduct->total = $productData['quantity'] * $product->price;

                $total += $productData['quantity'] * $product->price;
                if (!$orderProduct->save()) {
                    throw new Exception('订单生成失败-订单商品保存失败:id=' . $product->id);
                } else {
                    $order->product_total = sprintf("%.2f", $total);
                    $shipping = sprintf("%.2f",$total*$property['shippingRatio']);                                            //计算运费
                    if ($shipping > $property['shippingUpperLimit']){                                        //运费大于运费规定上限，就为上限
                        $shipping = $property['shippingUpperLimit'];
                    }
                    $order->shipping = $shipping;
                    $order->total = sprintf("%.2f", $order->product_total)
                        + sprintf("%.2f", $order->shipping);              //总价 = 商品总价 + 运费

                    $order->quantity = $productTotal;
                    $order->save();
                }
            }
        }
        return ['total' => $total, 'productTotal' => $productTotal, 'totalQuality' => 0];
    }

    /**
     * 生成订单号
     *
     * @param Order $order
     * @return OrderService $this
     * @throws \Exception
     */
    protected function generateOrderSN(Order $order)
    {

//        $order->save();
        $serialNumber = Order::where('stores_id', $order->stores_id)->where('created_at', '>=',
            date('Y-m-d 00:00:00'))->count();
        $order->sn = substr(time(), 5, 5) . sprintf("%03d", $order->stores_id) . sprintf('%03d',
                $serialNumber);                   //订单号：时间戳+店铺id+店铺每天最大流水号
        if (!$order->save()) {
            throw new \Exception('订单生成失败-订单号生成失败');
        }
        return $this;
    }

    /**
     * 为订单分配店铺
     *
     * @param Order $order
     * @return OrderService $this
     * @throws \Exception
     */
    protected function distributeStore(Order $order)
    {
        $deliveryLocation = $order->address->amap_x . ',' . $order->address->amap_y;
        $result = $this->amapService->getAroundData($deliveryLocation);
        if ($result->status == 0 || $result->count == 0) {
            throw new \Exception('订单生成失败-云图附近店铺获取失败');
        } else {
            $stores = $result->datas;
            $store = Stores::where('id', $stores[0]->store_id)->first();
            $order->store_name = $store->name;
            $order->stores_id = $store->id;
            $order->store_image = $store->image;
            if (!$order->save()) {
                throw new \Exception('订单生成失败-店铺分配失败');
            }
        }
        return $this;
    }

    /**
     * 创建订单
     * 成功后添加微信支付订单
     *
     * @param array $orderData
     * @param $user
     * @return array
     */
    public function createOrder(array $orderData, $user)
    {
        \DB::beginTransaction();
        try {
            $orderData['users_id'] = $user->id;
            $order = $this->insertOrder($orderData);
            $this->distributeStore($order)
                ->generateOrderSN($order)
                ->addOrderDetail($order, $orderData['products']);
            $couponResult = $this->couponService->chooseCoupon($order->users_id, $order->product_total,
                $order->shipping);
            if (!empty($couponResult)) {
                switch ($couponResult['type']) {
                    case Coupon::TYPE_SHIPPING:
                        $order->coupon_shipping = $order->shipping - $couponResult['amount'];
                        $order->shipping = $couponResult['amount'];
                        $order->user_has_coupons_id = $couponResult['model']->id;
                        $order->total = $order->product_total + $order->shipping;
                        $order->save();
                        break;
                    default:
                }
            }
            $arrOrder = $order->toArray();
            $arrOrder['wx-config'] = $this->addWeChatOrder($order, $user->open_id);
            /** 分发事件 **/
            event(new CreatedEvent($order));
            \DB::commit();
            return $arrOrder;
        } catch (\Exception $e) {
            \DB::rollBack();
            \Log::debug($e->getMessage());
            \Log::debug($e->getTraceAsString());
            throw new HttpException(500, "订单创建失败，请稍后再试");
        }
    }


    /**
     * 取消订单
     *
     * 只有未付款和待确认的订单才能取消
     * 待确认的订单取消后会自动退款
     *
     * @param Order $order
     * @return bool
     * @throws \Exception
     */
    public function cancelOrder(Order $order)
    {
        \Log::debug('取消订单');
        \Log::debug(json_encode($order->toArray(), JSON_UNESCAPED_UNICODE));
        switch ($order->status) {
            case 0:
            case 5:
                if ($order->status == 5) {
                    \Log::debug('执行微信退款');
                    $payment = \EasyWeChat::payment();
                    $result = $payment->refund($order->sn, 'refund-' . $order->sn, $order->total * 100);
                    \Log::debug(json_encode($result , JSON_UNESCAPED_UNICODE));
                    if ($result['result_code'] !== 'SUCCESS') {
                        throw new \Exception('退款失败！请联系客服', 406);
                    }

                }
                $order->status = 4;
                if (!$order->save()) {
                    throw new \Exception('取消订单失败！', 406);
                }

                /** 分发事件 **/
                event(new CanceledEvent($order));
                return true;

            default:
                throw new \Exception('商家已确认该订单，不可取消！', 403);
        }
    }

    /**
     * @return array
     */
    public function getProperty()
    {
        $data = [];
        $property = Property::query()->get();
        foreach ($property as $value) {
            $data[$value->key] = $value->value;
        }
        return $data;
    }
}