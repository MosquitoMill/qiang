<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Category;
use App\Services\LogService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Category::query();
        $models = $query->when($keyword, function ($queryString) use ($keyword) {
            return $queryString->where('name', 'like', '%' . $keyword . '%');
        })->orderByDesc('id')->paginate();
        return $models;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => [
                'required',
                Rule::unique('categories'),
            ],
        ], [
            'name.required' => '分类名称必填',
            'name.unique' => '分类是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = new Category();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
           'admin_id'=>Auth::id(),
           'time'=> date('Y-m-d H:i:s'),
           'active'=>'添加了分类'.$model->name
        ]);
        return $model;
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function show($id)
    {
        $model = Category::query()->where('id', $id)->first();
        return $model;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => [
                'required',
                Rule::unique('categories')->ignore($id),
            ],
        ], [
            'name.required' => '分类名称必填',
            'name.unique' => '分类是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = Category::query()->where('id',$id)->first();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'修改了分类'.$model->name
        ]);
        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = Category::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'删除了分类'.$model->name
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
