<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserCollection;
class StatController extends Controller
{
    function index(Request $req){
        $targets = [
            "admin" => ADMIN,
            "consulor" => CONSULOR,
            "president" => PRESIDENT,
            "trainer" => TRAINER,
            "trainee" => TRAINEE,
        ];

        foreach($targets as $target => $value){
            $count = User::whereHas("roles", function ($q) use($value) {
                $q -> where("id", $value);
            }) -> count();
            $targets[$target] = $count;
        }


        return $targets;
    }
}
