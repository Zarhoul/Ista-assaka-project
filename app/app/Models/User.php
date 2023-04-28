<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Token;
use App\Models\User_roles;
use App\Models\Roles;
use App\Models\Document;
use App\Http\Auth;
use Illuminate\Support\STR;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        "last_name",
        "first_name",
        "cin",
        "address",
        "username",
        "email",
        "password",
        "tel",
        "stg_id",
        "profile",
    ];
	public $timestamps = false;
    function tokens(){
        return $this -> hasMany(Token::class, 'user');
    }
    function roles(){
        return $this->belongsToMany(Roles::class, 'user_roles', 'user', 'role');
    } 
    function documents(){
        return $this->hasMany(Document::class,'user');
    }
    function file(){
        return $this ->belongsTo(Files::class, 'profile');
    }
    function stagiaire(){
        // if($this -> roles() ->pluck("id")->contains(TRAINEE))
            return $this ->hasOne(Trainee::class, 'id', 'stg_id');
        // return null;
    }

    function meetings(){
        if($this -> roles() -> pluck("id") -> contains(TRAINEE))
            return $this -> hasMany(Meeting::class, 'user');

        return null;
    }



}
