<?php

namespace App\Http;

class Auth{
	static function user(){
		return AUTH_USER;
	}
	static function hasRole($roles=[]){
		$user = static::user();

		return $user -> roles() -> whereIn("role", $roles) -> exists();
	}
}