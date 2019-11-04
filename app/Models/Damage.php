<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Damage extends Model
{
    use SoftDeletes;

    public $table = 'damage';

    public $fillable = [
        'collection_id',
        'damage_people',
        'damage_reason',
        'is_repair'
    ];

    public function collection()
    {
        return $this->hasOne(Collection::class,'id','collection_id');
    }


    public function admin()
    {
        return $this->hasOne(Admins::class,'id','damage_people');
    }
}
