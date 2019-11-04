<?php

namespace App\Repositories;

use App\Interfaces\BaseInterface;
use Illuminate\Database\Eloquent\Model;

class ModelRepository implements BaseInterface
{
    use BaseRepository;

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }
}