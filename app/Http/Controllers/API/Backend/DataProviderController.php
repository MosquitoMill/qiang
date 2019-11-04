<?php

namespace App\Http\Controllers\API\Backend;

/**
 * Created by PhpStorm.
 * User: 都大爽
 * Date: 2017/8/22
 * Time: 10:47
 */
use App\Http\Controllers\Controller;
use App\Models\Admins;
use App\Models\Category;
use App\Models\Collection;
use App\Models\Department;
use App\Models\ProductCategories;
use App\Models\Stores;
use App\Models\Texture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class DataProviderController extends Controller
{

    /**
     * 上传图片
     * @param Request $request
     * @return array|\Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function fileUpload(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data,
            [
                'file' => 'required',
                'file_path' => 'required'
            ],
            [
                'file.required' => '图片未上传',
                'file_path.required' => '存储路径必填'
            ]
        );
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $file = $request->file('file');
        $filePath = $request->get('file_path');
        if ($file) {
            $path = Storage::put($filePath, $file);
            if ($path) {
                return ['status' => 'success', 'path' => $path, 'file_path' => $filePath];
            } else {
                return response(['upload_failed' => '上传失败'], 422);
            }
        }
    }


    /**
     * 获取产品分类下拉列表
     * @return mixed
     */
    public function getProductCategoriesList()
    {
        return ProductCategories::getSelectList();
    }

    /**
     * 获取店铺列表
     */
    public function getStoresList()
    {
        return Stores::getSelectList();
    }

    /**
     * 获取部门列表
     * @return mixed
     */
    public function getDepartmentList()
    {
        return Department::getSelectList();
    }

    /**
     * 分类列表
     */
    public function getCategoryList()
    {
        return Category::getSelectList();
    }

    /**
     * 质地类别列表
     */
    public function getTextureList()
    {
        return Texture::getSelectList();
    }

    /**
     * @return mixed
     */
    public function getCollectionList()
    {
        return Collection::getSelectList();
    }

    /**
     * @return mixed
     */
    public function getAdminList(){
        return Admins::getSelectList();
    }
}
