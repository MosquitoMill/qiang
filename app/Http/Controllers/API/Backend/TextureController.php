<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Texture;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class TextureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', '');
        $query = Texture::query();
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
                Rule::unique('texture'),
            ],
        ], [
            'name.required' => '质地类别名称必填',
            'name.unique' => '质地类别是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = new Texture();
        $model->fill($data);
        $model->save();
        return $model;
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function show($id)
    {
        $model = Texture::query()->where('id', $id)->first();
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
//        var_dump($data);die;
        $validator = Validator::make($data, [
            'name' => [
                'required',
                Rule::unique('texture')->ignore($id),
            ],
        ], [
            'name.required' => '质地类别名称必填',
            'name.unique' => '质地类别是唯一的'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 422);
        }
        $model = Texture::query()->where('id',$id)->first();
        $model->fill($data);
        $model->save();
        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function destroy($id)
    {
        $model = Texture::query()->where('id', $id)->first();
        try {
            if ($model->delete()) {
                return ['state' => 'success'];
            }
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }
}
