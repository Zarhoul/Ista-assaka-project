<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\jsonFailedValidation;
use App\Traits\jsonResponse;
use App\Traits\checkInput;
use App\Models\User;
use App\Models\User_roles;
use Illuminate\Http\Request;
use App\Http\Auth;
use App\Models\Token;
use Illuminate\Contracts\Validation\Validator;

class UserRequest extends FormRequest
{
    use jsonFailedValidation;
    use jsonResponse;
    use checkInput;

    /**
     * Déterminez si l'utilisateur est autorisé à faire cette demande.
     */
    public function authorize(Request $request): bool
    {
        return $this -> method() === "GET" ? true : Auth::hasRole([ADMIN]);
    }
    /**
     * Obtenez les règles de validation qui s'appliquent à la demande.
     *
     * @return array
     */
    public function rules(): array
    {
        $method = $this->method();
        if ($method === "PUT") {
            return [
                "traineeData" => "array",
                "traineeData.CNE" => "required",
                "traineeData.diplomat" => "required",
                "traineeData.codeMassar" => "required",
                "traineeData.idFilliere" => "required",
                'last_name' => 'string',
                'first_name' => 'string',
                'cin' => 'string',
                'address' => 'string',
                'username' => 'string',
                'email' => 'string',
                'password' => 'string',
                'tel' => 'string',
            ];
        }
        if ($method === "POST") {
            return [
                'last_name' => 'string|required',
                'first_name' => 'string|required',
                'cin' => 'string|required',
                'address' => 'string|required',
                'username' => 'string|required',
                'email' => 'string|required',
                'password' => 'string|required',
                'tel' => 'string|required:unique',
                'stg_id' => 'nullable',
                'profile' => 'nullable',
                // 'roles' => 'required'
            ];
        }
        return [
            //
        ];
    }
}
