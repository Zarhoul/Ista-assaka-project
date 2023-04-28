<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Posts;
class Files extends Model
{
    use HasFactory;
    protected $fillable=[
        "name",
        "date",

    ];
    function users(){
        return $this -> hasMany(User::class,);
    }
     function posts(){
        return $this -> hasMany(Posts::class,);
    }
}
