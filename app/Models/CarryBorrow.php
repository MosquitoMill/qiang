<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CarryBorrow extends Model
{
    use SoftDeletes;

    public $table = 'carry_borrow';

    public $fillable = [
        'company',
        'borrow_time',
        'return_time',
        'auditing_admin',
        'collection_id'
    ];

    public function admin(){
        return $this->hasOne(Admins::class,'id','admin_id');
    }
}
