<?php

namespace App\Services;
/**
 * 高德地图 Service
 *
 *
 */

class AmapService
{
    /**
     * 高德服务key， 云图table_id， HTTP容器
     * @var mixed
     */
    protected $serviceKey, $yuntuTableId;

    public function __construct()
    {
        $this->serviceKey = config('amap.service_key');
        $this->yuntuTableId = config('amap.table_id');
    }

    /**
     * 发送请求
     *
     * @param $method
     * @param $uri
     * @param $params
     * @return object
     */
    protected function send($method, $uri, $params = [], $assoc = false)
    {
        $data = null;
        $request = new \GuzzleHttp\Psr7\Request($method, $uri);
        $client = new \GuzzleHttp\Client();
        $promise = $client->sendAsync($request)->then(function ($response) use (&$data, $assoc) {
            $data = json_decode($response->getBody(), $assoc);
        });
        $promise->wait();
        return $data;
    }

    /**
     * 附近检索接口
     *
     * 检索1个中心点，周边一定公里范围内（直线距离或者导航距离最大10公里），一定时间范围内（最大24小时）上传过用户位置信息的用户，返回用户标识，经纬度，距离中心点距离。
     *
     * @param String $location 中心点 e.g 117.33094,38.96318
     *
     * @return object
     */
    public function doNearbyAround($location, $assoc = false)
    {
        return $this->send('GET', 'http://yuntuapi.amap.com/nearby/around?key=' . $this->serviceKey
            . '&center=' . $location . '&radius=5000', [], $assoc);
    }

    /**
     * 根据坐标获取云图数据库中的数据
     * @param $location
     * @example 117.33094,38.96318
     * @return object $jsonData
     */
    public function getAroundData($location)
    {
        return $this->send('GET', 'http://yuntuapi.amap.com/datasearch/around?key=' . $this->serviceKey
            . '&tableid=' . $this->yuntuTableId . '&center=' . $location . '&radius=50000');
    }

    /**
     * 检查坐标是否在地理围栏内
     * @param $location
     * @example 117.33094,38.96318
     * @return object $jsonData
     */
    public function checkGeofence($location)
    {
        $tmp = \Carbon\Carbon::now()->getTimestamp();
        return $this->send('GET', 'http://restapi.amap.com/v4/geofence/status?key='
            . $this->serviceKey . '&diu=358568072860640&locations=' . $location . ',' . $tmp);
    }


}