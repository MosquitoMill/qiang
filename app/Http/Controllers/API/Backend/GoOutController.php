<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\GoOut;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GoOutController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword');
        $models = GoOut::query()->with(['admin', 'collection'])->when($keyword, function ($query) use ($keyword) {
            $query->whereHas('collection', function ($queryString) use ($keyword) {
                $queryString->where('name', 'like', '%' . $keyword . '%');
            })->orWhereHas('admin', function ($queryStr) use ($keyword) {
                $queryStr->where('name', 'like', '%' . $keyword . '%');
            });
        })
            ->paginate();
        return $models;
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $model = new GoOut();
        $model->fill($data);
        $model->save();
        return $model;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = $this->findModel($id);
        $model->fill($data);
        $model->save();
        return $model;
    }

    public function show($id)
    {
        $model = $this->findModel($id);
        return $model;
    }

    public function destroy($id)
    {
        $model = GoOut::query()->where('id', $id)->first();
        try {
            if ($model->delete()) {
                return ['state' => 'success'];
            }
        } catch (\Exception $e) {
            return ['state' => 'failed', 'message' => $e->getMessage()];
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function findModel($id)
    {
        $model = GoOut::query()->where('id', $id)->first();
        return $model;
    }
}
