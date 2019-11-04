<?php

namespace App\Http\Controllers\API\Backend;

use App\Models\Log;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogController extends Controller
{
    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $keyword = $request->get('keyword',null);
        $models = Log::query()->with('admin')->orderBy('id','desc')->when($keyword,function ($queryString)use($keyword){
            $queryString->where('active','like','%'.$keyword.'%');
        })->paginate();
        return $models;
    }
}
