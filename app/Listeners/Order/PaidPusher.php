<?php

namespace App\Listeners\Order;

use App\Events\Order\PaidEvent;
use App\Services\PusherService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Components\UmengSend;

class PaidPusher
{
    protected $pusherService;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(PusherService $pusherService)
    {
        //
        $this->pusherService = $pusherService;
    }

    /**
     * Handle the event.
     *
     * @param  Paid $event
     * @return void
     */
    public function handle(PaidEvent $event)
    {
        //
        $order = $event->order;
        $params = ['text' => '您有的新订单，请及时处理！',
            'title' => '您有的新订单，请及时处理！',
            'ticker' => '您有的新订单，请及时处理！',
            'after_open' => 'go_custom',
            'custom' => ['order_id' => $order->id],
            'alias' => $order->store->storeAdmin->mobile,
            'alias_type' => 'XBShop',
        ];

        \Log::debug(json_encode($params, JSON_UNESCAPED_UNICODE));
        $result = $this->pusherService->push('store', $params);
        \Log::debug(json_encode($result, JSON_UNESCAPED_UNICODE));

    }
}
