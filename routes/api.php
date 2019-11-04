<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

include 'backend_api.php';
include 'rider_api.php';
include 'store_api.php';


Route::group(['prefix' => 'common', 'namespace' => 'API\Common'], function () {
    Route::get('img-information', 'DataProviderController@getImgInformation');                //获取显示图片信息
    Route::get('time', 'DataProviderController@getTime');
});


//前台路由组
Route::group(['prefix' => 'client', 'namespace' => 'API\Client', 'middleware' => ['auth:api-user']], function () {

    Route::get('test-push', 'OrderController@testPuth');
    Route::get('all-property', 'PropertyController@getProperty');
    //产品模块
    Route::resource('product', 'ProductController', [
        'except' => [
            'create',
            'store',
            'update',
            'destroy'
        ]
    ]);


    /**
     * 订单相关
     */
    Route::resource('order', 'OrderController', [
        'except' => [
            'create',
            'edit'
        ]
    ]);
    //Route::get('order', 'OrderController@index');                                                   //订单列表
    //Route::post('order', 'OrderController@store');                                                  //添加订单
    //Route::get('order-detail/{order}', 'OrderController@getOrderDetail');                          //订单详情
    Route::post('pay-order/{order}', 'OrderController@payOrder');                      //初级付款
    Route::post('choose-coupon', 'OrderController@chooseCoupon');   //选择优惠券
    //Route::get('cancel-order/{order}', 'OrderController@cancelOrder');                        //取消订单


    /**
     * 店铺列表
     */
    Route::get('store/{location}', 'StoreController@getStoresByLocation');                                //获取附近的店铺
    Route::get('geo-fence/{location}', 'UserAddressController@checkGeofence');   //检查地理围栏

    Route::get('district-select-list', 'DataProviderController@getCitySelectList');          //获取天津市区下拉列表信息


    Route::resource('user-address', 'UserAddressController', [
        'except' => [
            'create',
            'edit'
        ]
    ]);
    Route::get('user', 'UserController@getUser');                                                  //用户头像、姓名

    Route::get('wechat-js-sdk', 'WechatController@getWeChatJsSdk');

    /*
    * 我的优惠卷
    */
    Route::resource('user-coupon', 'UserCouponController', [
        'except' => [
            'create',
            'store',
            'update',
            'destroy'
        ]
    ]);
    Route::get('category-list','ProductController@getCategoryList');
});





