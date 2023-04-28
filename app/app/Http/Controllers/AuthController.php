<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Token;
use App\Traits\JsonResponse;
use App\Traits\checkInput;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedException;

class AuthController extends Controller
{
	use jsonResponse;
	use checkInput;

	function index(Request $request){
		$this -> check([
			"token" => "required"
		]);
		// fetch the token
		$token = Token::whereToken($request -> token) -> first();
		if(!isset($token)) return $this -> err("invalid token", 401);
		// return the user
		$owner = $token -> owner;
		// TODO : add user roles to the output
		return $this -> res([
			"id" => $owner->id,
			"username" =>$owner->username,
			"email" => $owner ->email,
			"roles" => [
				...$owner->roles()->pluck("role")
			]
		]);
	}

  function store(Request $request){
  	$this -> check([
  		"username" => ["string", "required"],
  		"password" => ["string", "required"]
  	]);

  	$user = User::whereUsername($request -> username) -> first();
		if(!isset($user)) return $this -> err("user doesn't exist", 403);

  	$test = hash("sha256", $request -> password);
  	if($user -> password != $test) return $this -> err("incorrect password", 403);

  	return $this -> res([
  		"token" => Token::generate($user)
  	]);
  }

//   function show(){
//   	return throw MethodNotAllowedException("Method not allowed");
//   }
//   function update(){
//   	return throw MethodNotAllowedException("Method not allowed");
//   }
//   function destroy(){
//   	return throw MethodNotAllowedException("Method not allowed");
//   }
}

