<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * App\Models\Admins
 *
 * @property int $id
 * @property string|null $name
 * @property string $username
 * @property string|null $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property string|null $api_token api访问令牌
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Admins onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Admins whereUsername($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Admins withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Admins withoutTrashed()
 * @mixin \Eloquent
 */
class Admins extends Authenticatable
{
    use SoftDeletes;

    protected $table = 'admins';

    protected $hidden = [
        'password'
    ];

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'role',
        'department_id',
        'identity',
        'gender'
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }


    public static function getSelectList()
    {
        return self::select('id', 'name')->get()->toArray();
    }
}
