<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\checkInput;
use App\Traits\jsonResponse;
use App\Models\User;
// use  App\Models\User_roles;
use Illuminate\Http\Request;

use App\Models\Token;
use Illuminate\Contracts\Validation\Validator;

class InfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    use jsonResponse;

    use checkInput;
    public function authorize(Request $request): bool
    {
        $this -> check([
            "token" => "required"
        ]);
        // fetch the token
        $token = Token::whereToken($request -> token) -> first();
        if(!isset($token)) return $this -> err("invalid token", 401);
        // return the user
        $roles = $token -> owner-> roles() -> pluck("role") ->toArray();
        // return in_array(5, $roles);
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $method = request() -> method();
        if(in_array($method, ["POST", "PUT"]))
            return [
                "name" => "string|required",
                "date" => "string|date",
                "description" => "string|required",
                 "email"=>"string|email",
                 "address"=>"string|required",
                 "address"=>"string|required",
                 "phoneNumber"=>"string|required"
                  ];
        return [
            //
        ];
    }
    function failedAuthorization(){
        return abort(403, "access denied");
    }
    function failedValidation(Validator $validator){
        return abort(400, "bad request");
    }
}
