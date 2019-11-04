<?php

namespace App\Listeners;

use App\Events\Event;
use App\Events\Order\PaidEvent;
use App\Events\Order\StoreConfirmedEvent;
use App\Events\RegisterEvent;
use App\Models\UserHasCoupon;
use App\Services\CouponService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RegisterDistributeCouponTriggerListener
{
    protected $couponService;

    /**
     * RegisterDistributeCouponTrigger constructor.
     * @param CouponService $couponService
     */
    public function __construct(CouponService $couponService)
    {
        //
        $this->couponService = $couponService;

    }

    /**
     * @param RegisterEvent $event
     */
    public function handle(RegisterEvent $event)
    {
        //

        $order = $event->order;
        \Log::debug('RegisterDistributeCouponTrigger:');
        \Log::debug($order->toArray());
        $this->couponService->distributeCoupon($order->users_id, $order->product_total, $order->shipping,
            CouponService::TRIGGER_AFTER_REGISTER, UserHasCoupon::SOURCE_TYPE_REGISTER, $order->id);

    }
}
