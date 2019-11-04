<?php

use Illuminate\Support\Facades\Route;

//骑手端
Route::group(['prefix' => 'rider', 'namespace' => 'API\Rider'], function () {
    //登录、登出
    Route::post('login', 'AuthController@login');
    Route::get('logout', 'AuthController@logout')->middleware('auth:api-delivery');

    Route::get('take-goods/{orderId}', 'OrderController@takeGoods')->middleware('auth:api-delivery');                            //取货
    Route::get('complete-order/{orderId}', 'OrderController@completeOrder')->middleware('auth:api-delivery');                  //完成订单
    Route::get('order-index/{status}', 'OrderController@index')->middleware('auth:api-delivery');                               //待取货订单列表
    Route::get('order/{id}', 'OrderController@getOrderDetail')->middleware('auth:api-delivery');                                  //订单详情

    //当前登录骑手详情
    Route::get('delivery-men', 'DeliveryMenController@getDeliveryMen')->middleware('auth:api-delivery');
    //当前登录骑手历史订单
    Route::get('delivery-order', 'DeliveryMenController@deliveryOrder')->middleware('auth:api-delivery');
});