<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Log extends Model
{
    use SoftDeletes;

    public $table='logs';

    public $fillable=[
        'admin_id',
        'time',
        'active'
    ];

    public function admin(){
        return $this->hasOne(Admins::class,'id','admin_id');
    }
}
