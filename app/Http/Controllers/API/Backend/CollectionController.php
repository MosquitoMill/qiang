<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Category;
use App\Models\Collection;
use App\Models\Knowledge;
use App\Models\Texture;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Services\LogService;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword', null);
        $models = Collection::query()->with(['category', 'texture'])->when($keyword, function ($query) use ($keyword) {
            $query->whereHas('category', function ($queryString) use ($keyword) {
                $queryString->where('name', 'like', '%' . $keyword . '%');
            })->orWhere('name', 'like', '%' . $keyword . '%')
                ->orWhereHas('texture', function ($queryStr) use ($keyword) {
                    $queryStr->where('name', 'like', '%' . $keyword . '%');
                });
        })->paginate();
        return $models;
    }


    public function store(Request $request)
    {
        $data = $request->all();
        $model = new Collection();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '添加了藏品' . $model->name
        ]);
    }

    public function show($id)
    {
        $model = Collection::query()->with(['category', 'texture'])->where('id', $id)->first();
        return $model;
    }


    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = Collection::query()->where('id', $id)->first();
        $model->fill($data);
        $model->save();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '修改了藏品' . $model->name
        ]);
        return $model;
    }

    public function destroy($id)
    {
        $model = Collection::query()->where('id', $id)->first();
        LogService::insertLog([
            'admin_id' => Auth::id(),
            'time' => date('Y-m-d H:i:s'),
            'active' => '删除了藏品' . $model->name
        ]);
        try {
            if ($model->delete()) {
                return ['state' => 'success'];
            }
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }

    public function fileUpload(Request $request)
    {
        $file = $request->file('file');
        $path = $file->store('collectionFiles', 'public');
        return ['status' => 'success', 'path' => $path];
    }


    public function getKnowledgeContent($id)
    {
        $model = Collection::query()->where('id', $id)->first();
        $knowledge = Knowledge::query()
            ->where('category_id',$model->category_id)
            ->where('start_date','<',$model->period)
            ->where('end_date','>',$model->period)->first();
        return $knowledge;
    }

    public function getStatisticsData()
    {
        $categories = Category::query()->get();
        $data = [];
        $arr = [
            'value' => null,
            'name' => null,
            'itemStyle' => [
                'normal' => [
                    'color' => null
                ]
            ]
        ];

        foreach ($categories as $category) {
            $number = Collection::query()->where('category_id', $category->id)->count();
            $data[] = [
                'value' => $number,
                'name' => $category->name,
                'itemStyle' => [
                    'normal' => [
                        'color' => $category->color
                    ]
                ]
            ];
        }


//        var_dump($data);

        return $data;
    }
}
