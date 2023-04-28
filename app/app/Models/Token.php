<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Token extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
    	"user",
    	"token",
    	"created"
    ];
    static function generate($user){
	  	// generate and store the access token
	  	$token = hash("sha256", time() . rand() . $user -> name . $user -> id);
    	Token::create([
    		"user" => $user -> id,
    		"token" => $token,
    		"created" => date("Y-m-d h:i:s")
    	]);

    	return $token;
    }
    function owner(){
    	return $this -> belongsTo(User::class, 'user');
    }
}
