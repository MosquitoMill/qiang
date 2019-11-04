<?php

namespace App\Http\Controllers\API\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use App\Services\LogService;

class DepartmentController extends Controller
{

    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Department::query();
        $models = $query->when($keyword, function ($queryString) use ($keyword) {
            return $queryString->where('name', 'like', '%' . $keyword . '%');
        })->orderByDesc('id')->paginate();
        return $models;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $model = Department::query()->where('id', $id)->first();
        return $model;
    }

    /**
     * @param Request $request
     * @return Department|\Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => [
                'required',
                Rule::unique('department'),
            ],
        ], [
            'name.required' => '部门名称必填',
            'name.unique' => '部门是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = new Department();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '添加了部门' . $model->name
        ]);
        return $model;
    }

    /**
     * @param Request $request
     * @param $id
     * @return Department|\Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => [
                'required',
                Rule::unique('department')->ignore($id),
            ],
        ], [
            'name.required' => '部门名称必填',
            'name.unique' => '部门是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = Department::query()->where('id', $id)->first();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '修改了部门' . $model->name
        ]);
        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = Department::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id'=>Auth::id(),
            'time'=> date('Y-m-d H:i:s'),
            'active'=>'删除了部门'.$model->name
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