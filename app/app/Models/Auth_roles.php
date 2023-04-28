<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Roles;
class Auth_roles extends Model
{
    use HasFactory;
protected $fillable = [
        "name",
        "role",
    ];

    function role(){
        return $this -> belongsTo(Roles::class, 'role');
    }
}
