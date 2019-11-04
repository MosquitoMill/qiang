<?php

namespace App\Services;

use App\Models\Log;

class LogService{
    public static function insertLog($data){
        $model = new Log();
        $model->fill($data);
        $model->save();
    }
}