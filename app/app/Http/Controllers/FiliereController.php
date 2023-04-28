<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\FiliereRequest;
use App\Models\User;
use App\Models\Token;
use App\Models\Filiere;
use App\Http\Resources\FiliereCollection;
use App\Http\Resources\FiliereResource;
use App\Models\User_roles;
use App\Http\Auth; // to provide the user
use App\Traits\jsonResponse; // to provide the user
use App\Traits\checkInput; // to provide the user

class FiliereController extends Controller
{
    /**
     * Display a listing of the resource.
     * filiere
     */
    use jsonResponse;
    use checkInput;
    public function index()
    {
    $filiere = Filiere::get();
    return new FiliereCollection($filiere);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FiliereRequest $request)
    {
        //
        if(!Auth::hasRole([ADMIN,PRESIDENT]))
            return $this -> err("access denied", 403);

        $filiere = Filiere::create([
                    "idFormation"=>$request->id,
                    "NameFormation"=>$request->NameFormation,
                    "abbreviation"=>$request->abbreviation,
                    "NiveauFormation"=>$request->NiveauFormation,
                    "TypeFormation"=>$request->TypeFormation,
                    "AnneeEtude"=>$request->AnneeEtude ,
                    "ModeFormation"=>$request->ModeFormation,
                    "NiveauScolaire"=>$request->NiveauScolaire,
                    "url"=>$request->url
            

        ]);
        return new FiliereResource($filiere);
    }

    /**
     * Display the specified resource.
     */
    public function show(Filiere $filiere)
    {
        return new FiliereResource($filiere);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FiliereRequest $request,Filiere $filiere)
    {
        if(!Auth::hasRole([ADMIN,PRESIDENT])) {
        return $this -> err("access denied", 403);
    }
    // Update the filiere
    $filiere->update($request->safe()->toArray());

    // Return the updated filiere
    return $this -> res($filiere, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Filiere $filiere)
    {
        if(!Auth::hasRole([ADMIN,PRESIDENT]))
        return $this -> err("access denied", 403);
    $filiere->delete();
    return $this -> res(["status" => "filiere deleted successfully"], 200);
    }
}







