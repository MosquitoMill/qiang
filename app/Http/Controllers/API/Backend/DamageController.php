<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Damage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\LogService;
use Illuminate\Support\Facades\Auth;

class DamageController extends Controller
{
    //
    public function index(Request $request)
    {
        $keyword = $request->get('keyword');
        $models = Damage::query()->with(['admin', 'collection'])
            ->when($keyword, function ($query) use ($keyword) {
                $query->whereHas('collection', function ($queryString) use ($keyword) {
                    $queryString->where('name', 'like', '%' . $keyword . '%');
                });
            })->paginate();
        return $models;
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $model = new Damage();
        $model->fill($data);
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '添加了损坏信息' . $model->id
        ]);
        $model->save();
    }

    public function show($id)
    {
        $model = Damage::query()->where('id', $id)->first();
        return $model;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = Damage::query()->where('id', $id)->first();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '修改了损坏信息' . $model->id
        ]);
        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = Damage::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '删除了损坏信息' . $model->id
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
