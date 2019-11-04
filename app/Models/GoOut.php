<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GoOut extends Model
{
    //
    use SoftDeletes;

    public $table='go_out_manage';

    public $fillable = [
        'admin_id',
        'collection_id',
        'number',
        'time',
        'remark'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function admin()
    {
        return $this->hasOne(Admins::class,'id','admin_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function collection()
    {
        return $this->hasOne(Collection::class,'id','collection_id');
    }
}
