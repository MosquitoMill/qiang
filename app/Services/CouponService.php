<?php

namespace App\Services;

use App\Models\CouponDistributeRule;
use App\Models\Order;
use App\Models\UserHasCoupon;

/**
 * 高德地图 Service
 *
 *
 */
class CouponService
{
    const TRIGGER_AFTER_PAID = 'after-paid';
    const TRIGGER_AFTER_REGISTER = 'after-register';

    public function __construct()
    {
    }

    /**
     * 发放优惠券方法
     *
     * @param int $userId 用户ID
     * @param float $productTotal 商品总价
     * @param float $shipping 运费
     * @param string $trigger 触发节点
     * @return int
     */
    public function distributeCoupon(
        int $userId,
        float $productTotal,
        float $shipping,
        string $trigger,
        $sourceType,
        $sourceId
    ): int {
        $distributeList = CouponDistributeRule::query()->where('trigger', $trigger)->get();
        $effectNum = 0;
        foreach ($distributeList as $distribute) {
            if ($distribute->coupon->amount == -1) {
                $result = $this->applyAlgorithm($productTotal, $shipping, $distribute->distribute_rule);
            } else {
                $result = $distribute->coupon->amount;
            }
            if ($result > 0) {
                $userCoupon = new UserHasCoupon();
                $userCoupon->user_id = $userId;
                $userCoupon->coupon_id = $distribute->coupon_id;
                $userCoupon->expired_at = date('Y-m-d H:i:s', strtotime('+1 month'));
                $userCoupon->amount = $result;
                $userCoupon->source_type = $sourceType;
                $userCoupon->source_id = $sourceId;
                $userCoupon->save();
            }
            $effectNum++;
        }
        return $effectNum;
    }

    /**
     * 将优惠券标为已使用
     *
     * @param int $id
     * @return bool
     */
    public function useCoupon(int $id)
    {
        $coupon = UserHasCoupon::find($id);
        $coupon->used_at = date('Y-m-d H:i:s');
        return $coupon->save();
    }

    public function unuseCoupon(int $id)
    {
        $coupon = UserHasCoupon::find($id);
        $coupon->used_at = null;
        return $coupon->save();
    }

    /**
     * 返回优惠券计算结果 - 不使用该优惠券
     *
     * @param Order $order
     * @return UserHasCoupon
     */

    /**
     * 返回优惠券计算结果 - 不使用该优惠券
     *
     * @param int $userId
     * @param float $productTotal
     * @param float $shipping
     * @return array
     */
    public function chooseCoupon(int $userId, float $productTotal, float $shipping): array
    {
        /** @var  UserHasCoupon $coupon */
        $coupon = UserHasCoupon::query()->where('user_id', $userId)
            ->whereNull('used_at')->with('coupon')
            ->where('expired_at', '>', date('Y-m-d H:i:s'))->first();
        if (!$coupon) {
            return [];
        } else {
            $rule = $coupon->coupon->coupon_rule;
            $result = $this->applyAlgorithm($productTotal, $shipping, $rule, $coupon->amount);
        }

        return [
            'model' => $coupon,
            'type' => $coupon->coupon->type,
            'amount' => $result
        ];

    }

    public function applyAlgorithm($productTotal, $shipping, $rule, $couponAmount = 0)
    {
        $result = 0;
        try {
            $total = $productTotal + $shipping;
            $rule = str_replace("{shipping}", $shipping, $rule);
            $rule = str_replace("{product}", $productTotal, $rule);
            $rule = str_replace("{total}", $total, $rule);
            $rule = str_replace("{coupon-amount}", $couponAmount, $rule);
            eval('$result=' . $rule . ';');
            if ($result < 0) {
                $result = 0;
            }
            return $result;
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return $result;
        }
    }
}
