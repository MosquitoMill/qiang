<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\CarryBorrow;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\LogService;

class CarryBorrowController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request){
        $keyword = $request->get('keyword',null);
        $models = CarryBorrow::query()->with('admin')->when($keyword,function ($queryString)use($keyword){
            return $queryString->where('company','like','%'.$keyword.'%');
        })->paginate();
        return $models;
    }

    /**
     * @param Request $request
     * @return CarryBorrow
     */
    public function store(Request $request){
        $data = $request->all();
        $model = new CarryBorrow();
        $model->fill($data);
        $model->admin_id = Auth::id();
        $model->save();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'添加提借信息-提借单位:'.$model->company.'id:'.$model->id
        ]);
        return $model;
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function show($id){
        $model = CarryBorrow::query()->where('id',$id)->first();
        return $model;
    }

    /**
     * @param Request $request
     * @param $id
     */
    public function update(Request $request,$id){
        $data = $request->all();
        $model = CarryBorrow::query()->where('id',$id)->first();
        $model->fill($data);
        $model->admin_id = Auth::id();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'修改提借信息-提借单位:'.$model->company.'id:'.$model->id
        ]);
        $model->save();
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = CarryBorrow::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'删除提借信息-提借单位:'.$model->company.'id:'.$model->id
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
