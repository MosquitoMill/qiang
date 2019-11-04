<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * 登录路由
 */
Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'DashboardController@index');
});

Route::group(['middleware' => ['web', 'wechat.oauth']], function(){
    Route::get('wechat/callback', 'API\Client\WechatController@callback');
});

/**
 * 微信支付回调
 */
Route::post('wechat/pay-callback', 'API\Client\WechatController@payCallback');