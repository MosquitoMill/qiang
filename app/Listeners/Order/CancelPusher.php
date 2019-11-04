<?php

namespace App\Listeners\Order;

use App\Components\UmengSend;
use App\Events\Order\CanceledEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CancelPusher
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
     * @param  CanceledEvent  $event
     * @return void
     */
    public function handle(CanceledEvent $event)
    {
        //

//        if (!empty($admin->id_card)) {                  //给骑手发推送
//            $api = new UmengSend('android', '59a36da53eae250181001a02', 'vho5wbhu7xgokbquda2ahh6nlttjjrf1', true);
//            $api->setAndroidText('您有一条新消息！')
//                ->setAndroidTitle('您有新订单待确认！')
//                ->setAndroidTicker('您有新订单待确认！')
//                ->setAndroidAfterOpen('go_custom')
//                ->setAndroidCustom(['order_id' => $order->id])
//                ->setAlias($admin->mobile)
//                ->setAliasType('XBRider')
//                ->sendAndroidCustomizedcast();
//        } else {                                        //给店铺发推送
//            $api = new UmengSend('android', '59a396d28f4a9d5902000deb', 'oaq18d0kzsarkryeiu4nnpwb71kqbdlf', true);
//            $api->setAndroidText('您有新订单，请及时处理！')
//                ->setAndroidTitle('您有新订单，请处理')
//                ->setAndroidTicker('您有新订单待确认！')
//                ->setAndroidAfterOpen('go_custom')
//                ->setAndroidCustom(['order_id' => $order->id])
//                ->setAlias('13900001111')
//                ->setAliasType('XBShop')
//                ->sendAndroidCustomizedcast();
//        }
    }
}
