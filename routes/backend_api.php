<?php

use Illuminate\Support\Facades\Route;


//后台路由
//Route::group(['prefix' => 'backend', 'namespace' => 'API\Backend', 'middleware' => ['auth:api']], function () {
Route::group(['prefix' => 'backend', 'namespace' => 'API\Backend', 'middleware' => []], function () {

    Route::get('date/{startdate}/{enddate}', 'DateController@getDateFromRange');
//    Route::get('date', function () {
//        return 666;
//    });

    /**
     * 用户
     */
    Route::resource('admin', 'AdminController', [
        'except' => [
            'create', 'edit'
        ]
    ]);
    Route::get('auth-admin', 'AdminController@getAuthAdmin');

    /**
     * 部门
     */
    Route::resource('department', 'DepartmentController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    /**
     * 分类
     */
    Route::resource('category', 'CategoryController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    /**
     *质地类别
     */
    Route::resource('texture', 'TextureController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    /**
     * 藏品
     */
    Route::resource('collection', 'CollectionController', [
        'except' => [
            'create', 'edit'
        ]
    ]);
    Route::post('collection-upload', 'CollectionController@fileUpload');
    Route::get('knowledge-content/{id}','CollectionController@getKnowledgeContent');
    Route::get('statistics','CollectionController@getStatisticsData');

    /**
     * 藏品工作
     */
    Route::resource('collection-work', 'CollectionWorkInfoController', [
        'except' => [
            'create', 'edit'
        ]
    ]);


    Route::resource('damage', 'DamageController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    /**
     * 提借信息
     */
    Route::resource('carry-borrow', 'CarryBorrowController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    Route::resource('go-out', 'GoOutController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    /**
     * 知识库
     */
    Route::resource('knowledge', 'KnowledgeController', [
        'except' => [
            'create', 'edit'
        ]
    ]);

    Route::resource('log', 'LogController', [
        'except' => [
            'create', 'edit'
        ]
    ]);


    Route::post('admin/set-password/{id}', 'AdminController@resetPassword');

    //公共数据接口
    Route::group(['prefix' => 'data'], function () {
        Route::post('fill-upload', 'DataProviderController@fileUpload');
        //店铺列表
        Route::get('store-list', 'DataProviderController@getStoresList');
        Route::get('department-list', 'DataProviderController@getDepartmentList');
        Route::get('category-list', 'DataProviderController@getCategoryList');
        Route::get('texture-list', 'DataProviderController@getTextureList');
        Route::get('collection-list', 'DataProviderController@getCollectionList');
        Route::get('admin-list', 'DataProviderController@getAdminList');
    });

});
