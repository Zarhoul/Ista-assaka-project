<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User_roles;
use App\Models\Auth_roles;

class Roles extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        "name",
    ];
    function user_roles(){
        return $this -> hasMany(User_roles::class,);
    }
     function auth_roles(){
        return $this -> hasMany(Auth_roles::class,);
    }
}
