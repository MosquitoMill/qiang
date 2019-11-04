<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    public $table = 'categories';

    public $fillable = ['name','color'];

    public function collections()
    {
        return $this->belongsTo(Collection::class, 'category_id');
    }

    public static function getSelectList()
    {
        return self::select('id', 'name')->get()->toArray();
    }
}
