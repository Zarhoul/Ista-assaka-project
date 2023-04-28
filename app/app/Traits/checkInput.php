<?php
namespace App\Traits;
use Illuminate\Support\Facades\Validator;


trait checkInput{
	function check($values){
		$validator = Validator::make(request() -> all(), $values);

		if ($validator -> fails())  
		  die($this -> err("request format is invalid", 400));
	}
}