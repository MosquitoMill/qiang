<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Knowledge;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class KnowledgeController extends Controller
{
    public function index(Request $request){
        $keyword = $request->get('keyword',null);
        $models = Knowledge::query()->with('category')->when($keyword,function($queryString)use($keyword){
            $queryString->whereHas('category',function ($queryStr)use($keyword){
                $queryStr->where('name','like','%'.$keyword.'%');
            });
        })->paginate();

        return $models;
    }

    public function store(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'category_id' => [
                'required'
            ],
            'content' => 'required',
            'start_date' => 'required',
            'end_date' => 'required'
        ], [
            'category_id.required' => '藏品分类必填',
            'content.required' => '内容必填',
            'start_date' => '起始年代必填',
            'end_date' => '结束年代必填'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = new Knowledge();
        $model->fill($data);
        $model->save();
        return $model;
    }

    public function show($id){
        $model = Knowledge::query()->where('id',$id)->first();
        return $model;
    }

    public function update(Request $request,$id){
        $data = $request->all();
//        var_dump($data);die;
        $validator = Validator::make($data, [
            'category_id' => [
                'required'
            ],
            'content' => 'required',
            'start_date' => 'required',
            'end_date' => 'required'
        ], [
            'category_id.required' => '藏品分类必填',
            'content.required' => '内容必填',
            'start_date' => '起始年代必填',
            'end_date' => '结束年代必填'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = Knowledge::query()->where('id',$id)->first();
        $model->fill($data);
        $model->save();
        return $model;
    }

    public function destroy($id){
        $model = Knowledge::query()->where('id', $id)->first();
        try {
            if ($model->delete()) {
                return ['state' => 'success'];
            }
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }
}
