<?php

use Illuminate\Support\Facades\Route;

//店铺端
Route::group(['prefix' => 'store', 'namespace' => 'API\Store'], function () {
    Route::post('login', 'AuthController@login');

    Route::get('order/{status}', 'OrderController@index')->middleware('auth:api-store-user');
    Route::post('confirm-order/{orderId}', 'OrderController@confirmOrder')->middleware('auth:api-store-user');
    Route::get('cancelOrder-order/{orderId}', 'OrderController@cancelOrder')->middleware('auth:api-store-user');

    Route::put('store/{storeId}', 'StoreController@update')->middleware('auth:api-store-user');                                        //保存店铺时间间隔
    Route::get('store-admin', 'StoreController@getStoreAdmin')->middleware('auth:api-store-user');
    Route::get('riders', 'DataProviderController@getRiderList')->middleware('auth:api-store-user');

});