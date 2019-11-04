<?php

namespace App\Facades;

/**
 * Created by PhpStorm.
 * User: LIU
 * Date: 2017/8/31
 * Time: 9:57
 */
use Illuminate\Support\Facades\Facade;

class AdminFacade extends Facade
{
    public static function getFacadeAccessor()
    {
        return 'admin';
    }
}