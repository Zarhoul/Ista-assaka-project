<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\InfoCollection;
use App\Http\Resources\InfosResource;
use App\Http\Requests\InfoRequest;
use App\Models\Infos;
use App\Models\User;
use App\Traits\jsonResponse; // to provide the user
use App\Traits\checkInput; // to provide the user
use App\Models\User_roles;
use App\Http\Auth; // to provide the user
class InfosController extends Controller
{    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        // Get all infos
        $info = Infos::get();

        // Return the infos as a collection
        return new InfoCollection($info);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InfoRequest $request)
    {$info = Auth::user();
    
        // Create a new info
       
       if(!Auth::hasRole([ADMIN,PRESIDENT]))
            return $this -> err("access denied", 403);
             $info = Infos::create([
                'name' => $request->name,
                'date' => $request->date,
                'description' => $request->description,
                'email' => $request->email,
                'address' => $request->address,
                'phoneNumber' => $request->phoneNumber,

                ]);


        // Return the ID of the created info
     return new InfosResource($info);
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    public function show(Infos $info)
    {
    return new InfosResource($info);
    }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
      public function update(InfoRequest $request, Infos $info)
{
    // Check if user has the 'admin' role
    if(!Auth::hasRole([ADMIN])) {
        return $this -> err("access denied", 403);
    }

    // Update the user
    $info->update($request->safe()->toArray());

    // Return the updated user
    return $this -> res($info, 200);
}

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
     public function destroy(Infos $info)
{
    if(!Auth::hasRole([ADMIN]))
        return $this -> err("access denied", 403);
    $info->delete();
    return $this -> res(["status" => "infos deleted successfully"], 200);
}
}

