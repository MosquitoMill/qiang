<?php

namespace App\Listeners\Coupon;

use App\Events\Event;
use App\Events\Order\CanceledEvent;
use App\Services\CouponService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UnuseCoupon
{
    protected $couponService;



    /**
     * UnuseCoupon constructor.
     * @param CouponService $couponService
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
    public function handle(CanceledEvent $event)
    {
        //
        if ($event->order->user_has_coupons_id) {
            $this->couponService->unuseCoupon($event->order->user_has_coupons_id);
        }
    }
}
