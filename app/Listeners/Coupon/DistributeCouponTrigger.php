<?php

namespace App\Listeners\Coupon;

use App\Events\Event;
use App\Events\Order\PaidEvent;
use App\Events\Order\StoreConfirmedEvent;
use App\Models\UserHasCoupon;
use App\Services\CouponService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DistributeCouponTrigger
{
    protected $couponService;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(CouponService $couponService)
    {
        //
        $this->couponService = $couponService;

    }

    /**
     * Handle the event.
     *
     * @param  Event $event
     * @return void
     */
    public function handle(StoreConfirmedEvent $event)
    {
        //

        $order = $event->order;
        \Log::debug('DistributeCouponTrigger:');
        \Log::debug($order->toArray());
        $this->couponService->distributeCoupon($order->users_id, $order->product_total, $order->shipping,
            CouponService::TRIGGER_AFTER_PAID, UserHasCoupon::SOURCE_TYPE_ORDER, $order->id);
    }
}
