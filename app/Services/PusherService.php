<?php
/**
 * Created by PhpStorm.
 * User: samxiao
 * Date: 2017/10/13
 * Time: 上午11:48
 */

namespace App\Services;


use App\Components\UmengSend;

class PusherService
{
    protected $umengSend;
    protected $riderKey;
    protected $riderSecret;
    protected $storeKey;
    protected $storeSecret;
    protected $productionMode = true;

    public function __construct(UmengSend $umengSend)
    {
        $this->umengSend = $umengSend;

        $this->riderKey = config('umeng.rider_key');
        $this->riderSecret = config('umeng.rider_secret');
        $this->storeKey = config('umeng.store_key');
        $this->storeSecret = config('umeng.store_secret');
    }


    /**
     * @param $type
     * @param $message
     * @throws \Exception
     */
    public function push($type, $message)
    {
        //给骑手发推送
        switch ($type) {
            case 'rider':
                $api = new UmengSend('android', $this->riderKey, $this->riderSecret, $this->productionMode);
                break;
            case 'store':
                $api = new UmengSend('android', $this->storeKey, $this->storeSecret, $this->productionMode);
                break;
            default:
                throw new \Exception('Unknown Type');

        }
        return $api->sendAndroidCustomizedcast($message);

    }

}