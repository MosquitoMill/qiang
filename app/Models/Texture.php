<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Texture extends Model
{
    use SoftDeletes;

    public $table = 'texture';

    public $fillable = ['name'];

    public static function getSelectList()
    {
        return self::select('id', 'name')->get()->toArray();
    }

    public function collections()
    {
        return $this->belongsTo(Collection::class, 'texture_id');
    }
}
