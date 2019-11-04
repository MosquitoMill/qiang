<?php

namespace App\Listeners\Coupon;

use App\Events\Event;
use App\Events\Order\CreatedEvent;
use App\Events\Order\PaidEvent;
use App\Services\CouponService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UseCoupon
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
    public function handle(CreatedEvent $event)
    {
        //
        if ($event->order->user_has_coupons_id) {
            $this->couponService->useCoupon($event->order->user_has_coupons_id);
        }
    }
}
