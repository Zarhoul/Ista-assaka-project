<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Roles;
use App\Models\User;
class User_roles extends Model
{
    use HasFactory;
     protected $fillable = [
        "user",
        "role",
    ];
    function user(){
        return $this -> belongsTo(User::class, 'user');
    }
     function role(){
        return $this -> belongsTo(Roles::class, 'role');
    }

public function hasRole(string $roleName): bool
{
    foreach ($this->roles as $rolel) {
        if ($rolel->user === $roleName) {
            return true;
        }
    }
    return false;
}


}
