<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    public $timestamps = false;
    protected $fillable = [
        "user",
        "created",
        "status",
        "meeting_time",
    ];
    use HasFactory;

    function user(){
        return $this -> belongsTo(User::class, 'user');
    }
}
