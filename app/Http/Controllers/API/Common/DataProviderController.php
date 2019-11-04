<?php

namespace App\Http\Controllers\API\Common;

use App\Http\Controllers\Controller;

class DataProviderController extends Controller
{
    /**
     * 获取显示图片信息
     * @return string
     */
    public function getImgInformation()
    {
        $str = 'http://' . env('CDN_ENDPOINT') . '/';
        return $str;
    }

    /**
     * @return int
     */
    public function getTime()
    {
        $time = time();
        return $time;
    }
}