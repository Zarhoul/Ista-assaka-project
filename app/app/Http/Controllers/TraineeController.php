<?php

namespace App\Http\Controllers;
use DB ;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Token;
use App\Http\Resources\UserCollection;
use App\Http\Resources\TraineeResource;
use App\Models\User_roles;
use App\Models\Trainee;
use App\Models\Filiere;
use App\Http\Auth; // to provide the user
use App\Traits\jsonResponse; // to provide the user
use App\Traits\checkInput; // to provide the user

class TraineeController extends Controller
{
    use jsonResponse;
    use checkInput;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request){
        $user = Auth::user();
       
        // Check if the user has the admin or trainer role
        if (Auth::hasRole([ADMIN])) {
            
        //   $stagiares = DB::table('trainee')
        // ->join('users', 'users.id', '=', 'trainee.user')
        // ->select('trainee.*', 'users.*')
        // ->get();
        // $stagiares = Trainee::join('filieres', 'filieres.id', '=', 'trainee.idFiliere')
        //             ->join('users', 'users.stg_id', '=', 'trainee.id')
        //             ->select('trainee.*', 'users.*', 'filieres.*')
        //             ->get();
        $stagiaires = User::whereNotNull("stg_id") -> with("stagiaire.filiere") -> get();


return $this->res([
    "data" => $stagiaires,
]);

        // return new TraineeCollection($stagiares);
            
        }
       return $this -> err("access denied", 403);
}


    /**
     * Store a newly created resource in storage.
     */




    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
