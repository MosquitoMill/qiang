<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Knowledge extends Model
{
    //
    use SoftDeletes;

    public $table = 'knowledge';

    public $fillable = [
        'category_id',
        'start_date',
        'end_date',
        'content'
    ];

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
}
