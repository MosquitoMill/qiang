<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\CollectionWorkInfo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\LogService;

class CollectionWorkInfoController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword');
        $models = CollectionWorkInfo::query()->with('collection')->when($keyword, function ($query) use ($keyword) {
            $query->whereHas('collection', function ($queryString) use ($keyword) {
                $queryString->where('name', 'like', '%' . $keyword . '%');
            })->orWhere('display_area', 'like', '%' . $keyword . '%');
        })->paginate();
        return $models;
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $model = new CollectionWorkInfo();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '添加了藏品工作信息-藏品ID：' . $model->collection_id . 'ID：' . $model->id
        ]);
        return $model;
    }

    public function show($id)
    {
        $model = CollectionWorkInfo::query()->where('id', $id)->first();
        return $model;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = CollectionWorkInfo::query()->where('id', $id)->first();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '修改了藏品工作信息-藏品ID：' . $model->collection_id . 'ID：' . $model->id
        ]);
        return $data;
    }

    public function destroy($id)
    {
        $model = CollectionWorkInfo::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '删除了藏品工作信息-藏品ID：' . $model->collection_id . 'ID：' . $model->id
        ]);
        try {
            if ($model->delete()) {
                return ['state' => 'success'];
            }
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }
}
