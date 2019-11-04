<?php

namespace App\Listeners;

use App\Events\UpdateNotesStatusEvent;
use EasyWeChat\Support\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateStatusEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UpdateNotesStatusEvent $event
     * @return void
     */
    public function handle(UpdateNotesStatusEvent $event)
    {
        //更新订单状态
        $order = $event->order;
        $status = $event->type;
        $order->status = $status;
        if (!$order->save()) {
            Log::error('订单状态更新失败');
        }

        //更新送货单状态
//        $notes = $order->deliveryNotes;
//        if ($notes) {                           //如果没有付款就取消订单此时订单是没有对应的送货单的。需要做此判断
//            $notes->status = $status;
//            if ($notes->save()) {
//                Log::error('送货单状态更新失败');
//            }
//        }

    }
}
