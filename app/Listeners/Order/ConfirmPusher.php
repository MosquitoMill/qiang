<?php

namespace App\Listeners\Order;

use App\Events\Order\StoreConfirmedEvent;
use App\Services\PusherService;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ConfirmPusher
{
    protected $pusherService;


    /**
     * Create the event listener.
     *
     * @param PusherService $pusherService
     *
     * @return void
     *
     */
    public function __construct(PusherService $pusherService)
    {
        //
        $this->pusherService = $pusherService;
    }

    /**
     * Handle the event.
     *
     * @param  StoreConfirmedEvent $event
     * @return void
     */
    public function handle(StoreConfirmedEvent $event)
    {
        //
        $order = $event->order;
        $params = [
            'text' => '您有新的任务，请及时处理！',
            'title' => '您有的新任务，请及时处理！',
            'ticker' => '您有的新任务，请及时处理！',
            'after_open' => 'go_custom',
            'custom' => ['order_id' => $order->id],
            'alias' => $order->deliveryMen->mobile,
            'alias_type' => 'XBRider',
        ];
        \Log::debug(json_encode($params, JSON_UNESCAPED_UNICODE));
        $result = $this->pusherService->push('rider', $params);
        \Log::debug(json_encode($result, JSON_UNESCAPED_UNICODE));
    }
}
