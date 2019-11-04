<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CollectionWorkInfo extends Model
{
    use SoftDeletes;

    public $table = 'collection_work_info';

    public $fillable = [
        'collection_id',
        'time',
        'display_area'
    ];

    public function collection()
    {
        return $this->hasOne(Collection::class, 'id', 'collection_id');
    }
}
