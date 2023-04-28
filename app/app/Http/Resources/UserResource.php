<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     * 
     */
    public function toArray(Request $request): array
    {
        static $wrap = false;
        return [
            'id' =>$this->id,
            'last_name'=>$this->last_name,
            'first_name'=>$this->first_name,
            'cin'=>$this->cin,
            'address'=>$this->address,
            'username' =>$this->username,
            'email' =>$this->email,
            'password'=>$this->password,
            'tel'=>$this->tel,
            'stg_id'=>$this->stg_id,
            'profile'=>$this->profile,
            'roles'=> $this->roles->pluck('name'),
            'stagiaire'=>$this->stagiaire() -> get(),
        ];
    }
}
