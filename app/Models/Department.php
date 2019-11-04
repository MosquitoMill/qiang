<?php

namespace App\Models;

use Doctrine\Common\Cache\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;
    protected $table = 'department';
    protected $fillable = [
        'name'
    ];


    public function admins()
    {
        return $this->hasMany(Admins::class, 'department_id');
    }

    public static function getSelectList()
    {
        return self::select('id', 'name')->get()->toArray();
    }
}
