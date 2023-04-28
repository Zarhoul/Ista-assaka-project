<?php
namespace App\Traits;

trait jsonResponse{
	function res($data, $status = 200){
		return response() -> json($data, $status); 
	}
	function err($err, $status = 400){
		return response() -> json(["error" => $err], $status);
	}
}