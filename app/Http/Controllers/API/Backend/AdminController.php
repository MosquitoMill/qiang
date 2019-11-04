<?php

namespace App\Http\Controllers\API\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Models\Admins;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{

    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', null);
        $models = Admins::query()->with('department')->when($keyword, function ($query) use ($keyword) {
            return $query->where('name', 'like', '%' . $keyword . '%')
                ->orWhere('username', 'like', '%' . $keyword . '%');
        })->paginate();
        return $models;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        return \Admin::findModel($id);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request)
    {
        $departmentId = $request->get('department_id');
        $validator = Validator::make($request->all(), [
            'username' => [
                'required',
                Rule::unique('admins')
            ],
        ], [
            'username.required' => '用户名必填',
            'username.unique' => '用户名是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $department = Department::query()->where('id', $departmentId)->first();
        $department->number = $department->number + 1;
        $department->save();
        return \Admin::store($request->all());
    }

    /**
     * @param AdminRequest $request
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        $departmentId = $request->get('department_id');
        $department = Department::query()->where('id', $departmentId)->first();
        $admin = Admins::query()->where('id', $id)->first();
        if ($admin->department_id != $departmentId) {
            $oldDepartment = Department::query()->where('id', $admin->department_id)->first();
            $oldDepartment->number = $oldDepartment->number - 1;
            $oldDepartment->save();

            $department->number = $department->number + 1;
            $department->save();
        }


        if ($admin->number)

            $validator = Validator::make($request->all(), [
                'username' => [
                    'required',
                    Rule::unique('admins')->ignore($id)
                ],
            ], [
                'username.required' => '用户名必填',
                'username.unique' => '用户名是唯一的'
            ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        return \Admin::update($id, $request->all());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        $admin = Admins::query()->where('id', $id)->first();
        $department = Department::query()->where('id', $admin->department_id)->first();
        $department->number = $department->number - 1;
        
        $department->save();
        return \Admin::destroy($id);
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function resetPassword(Request $request, $id)
    {
        return \Admin::resetPassword($request->all(), $id);
    }

    public function getAuthAdmin()
    {
        $admin = Auth::user();
        return $admin;
    }
}