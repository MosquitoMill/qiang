<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
        'App\Events\UpdateNotesStatusEvent' => [
            'App\Listeners\UpdateStatusEventListener'
        ],
        /** 订单创建成功后 */
        'App\Events\Order\CreatedEvent' => [
            'App\Listeners\Coupon\UseCoupon'
        ],
        /** 订单支付成功后 */
        'App\Events\Order\PaidEvent' => [
            'App\Listeners\Order\PaidPusher' //支付后，店铺信息推送， 骑手信息推送
        ],
        /** 订单取消成功后 */
        'App\Events\Order\CanceledEvent' => [
            'App\Listeners\Coupon\UnuseCoupon', //取消订单后，对应返还优惠券
            'App\Listeners\Order\CancelPusher' //支付后，店铺信息推送， 骑手信息推送
        ],
        /** 店铺确认订单后 */
        'App\Events\Order\StoreConfirmedEvent' => [
            'App\Listeners\Order\ConfirmPusher',
            'App\Listeners\Coupon\DistributeCouponTrigger' //支付后，店铺信息推送， 骑手信息推送
        ],

        /** 骑手取货后 */
        'App\Events\Order\ShippingEvent' => [
        ],
        /** 订单完成 */
        'App\Events\Order\DoneEvent' => [
        ],
        /** 注册 */
        'App\Events\RegisterEvent' => [
            'App\Listeners\RegisterDistributeCouponTriggerListener'
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
