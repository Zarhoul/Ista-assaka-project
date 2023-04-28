<?php

namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
class UserCollection extends ResourceCollection
{
    static $wrap = false;
public function toArray(Request $request){
    return [
        'data' => $this->collection->map(function($user){
            return [
                'id' =>$user->id,
                'last_name'=>$user->last_name,
                'first_name'=>$user->first_name,
                'cin'=>$user->cin,
                'address'=>$user->address,
                'username' =>$user->username,
                'email' =>$user->email,
                'password'=>$user->password,
                'tel'=>$user->tel,
                'stg_id'=>$user->stg_id,
                'profile'=>$user->profile,
                'roles'=> $user->roles->pluck('name'),
            ];
        })->toArray()
    ];
}

}
