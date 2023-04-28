<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Trainee;
use App\Models\Token;
use Illuminate\Support\STR; 
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User_roles;
use App\Http\Auth; // to provide the user
use App\Traits\jsonResponse; // to provide the user
use App\Traits\checkInput; // to provide the user

class UserController extends Controller
{
    use jsonResponse;
    use checkInput;
    public function index(Request $request){
        // Fetch the user from the token
        $user = Auth::user();
       
        // Check if the user has the admin or trainer role
        if (Auth::hasRole([ADMIN, TRAINER, CONSULOR])) {
            $user=User::all();
            return new UserCollection($user);
        }

        return $this -> err("access denied", 403);
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(UserRequest $request)
    {
// 


        if(!Auth::hasRole([ADMIN]))
            return $this -> err("access denied", 403);

        $createArr = [
            'last_name'=>$request->last_name,
            'first_name'=>$request->first_name,
            'cin'=>$request->cin,
            'address'=>$request->address,
            "username" =>$request->username,
            "email" =>$request->email,
            "password"=>$request->password,
            'tel'=>$request->tel,
            'profile'=>$request->profile,
        ];
        if($request -> traineeData ?? false){
            $trainee = Trainee::create([
                "CNE" => $request -> traineeData["CNE"],
                "diplomat" => $request -> traineeData["diplomat"],
                "codeMassar" => $request -> traineeData["codeMassar"],
                "dateNaissance" => $request -> traineeData["dateNaissance"],
                "idFilliere" => $request -> traineeData["idFilliere"],
            ]);

            $createArr['stg_id'] = $trainee -> id;
        }


        $user = User::create($createArr);

        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
    return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(UserRequest $request, User $user)
{
    // Check if user has the 'admin' role
    if(!Auth::hasRole([ADMIN])) {
        return $this -> err("access denied", 403);
    }
    if($request -> traineeData ?? false){
        $traineeData = $request -> only([
            "traineeData.CNE",
            "traineeData.diplomat",
            "traineeData.codeMassar",
            "traineeData.idFilliere",
        ])["traineeData"];

        $trainee = Trainee::where("id", $user -> stg_id) -> update($traineeData);
    }

    // Update the user
    $user->update($request->only([
        "last_name",
        "first_name",
        "cin",
        "address",
        "username",
        "email",
        "password",
        "tel",
    ]));

    // Return the updated user
    return $this -> res(new UserResource($user), 200);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
{
    if(!Auth::hasRole([ADMIN]))
        return $this -> err("access denied", 403);
    $user->delete();
    return $this -> res(["status" => "user deleted successfully"], 200);
}
}
