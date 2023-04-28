<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Files;
class Posts extends Model
{
    use HasFactory;
    protected $fillable=[
        "title",
        "date",
        "content",
        "attachment",
    ];
    public function file()
    {   
        return $this->belongsTo(Files::class,'attachment');
    }
}


