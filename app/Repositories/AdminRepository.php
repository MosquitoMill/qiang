<?php

namespace App\Repositories;

use App\Interfaces\AdminInterface;
use App\Models\Admins;
use Illuminate\Http\Request;

class AdminRepository implements AdminInterface
{
    use BaseRepository;

    protected $model;

    public function __construct(Admins $model)
    {
        $this->model = $model;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function getModelList(Request $request)
    {
        // TODO: Implement getModelList() method.
        $keyword = $request->get('keyword', null);
        $models = $this->model->query()->when($keyword, function ($query) use ($keyword) {
            return $query->where('name', 'like', '%' . $keyword . '%')
                ->orWhere('username', 'like', '%' . $keyword . '%');
        })->paginate();
        return $models;
    }

    /**
     * @param array $input
     * @param $id
     * @return Admins|mixed
     */
    public function resetPassword(Array $input, $id)
    {
        $this->model = $this->findModel($id);
        $this->model->password = bcrypt($input['password']);
        $this->model->save();
        return $this->model;
    }


    /**
     * @param array $input
     * @return Admins
     */
    public function store(Array $input)
    {
        $this->model->fill($input);
        $this->model->password = bcrypt('123456');
        $this->model->save();
        return $this->model;
    }
}