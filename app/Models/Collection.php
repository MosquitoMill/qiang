<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Collection extends Model
{
    use SoftDeletes;

    public $table = 'collection';

    public $knowledgeContent;

    public $fillable = [
        'name',
        'period',
        'category_id',
        'texture_id',
        'quantity',
        'size',
        'weight',
        'completion',
        'pattern',
        'character',
        'picture_address',
        'video_address',
        'source_way',
        'time',
        'level',
        'condition',
        'address',
    ];

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public function texture()
    {
        return $this->hasOne(Texture::class, 'id', 'texture_id');
    }

    public static function getSelectList()
    {
        return self::select('id', 'name')->get()->toArray();
    }
}
