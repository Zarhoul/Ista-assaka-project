<?php

namespace App\Http\Requests;

use App\Http\Auth;
use App\Traits\jsonFailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class TraineeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
     use jsonFailedValidation;
    public function authorize(): bool
    {
         $method = $this -> method();

        if (in_array($method, ["PUT","DELETE","POST"]))
            return Auth::hasRole([ADMIN]);

        if (in_array($method, ["GET" ]))
            return Auth::hasRole([CONSULOR,TRAINEE]);

        return false;

    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $method = request()->method();

        if (in_array($method, ["POST", "PUT"])) {
            return [
                "diplomat" => "string|required",
                "dateNaissance" => "string|required",
                "codeMassar" => "string|required",
                "idFiliere" => "required",
                "lastName" => "string|required",
                "firstName" => "string|required",
                "username" => "string|required",
                "email" => "string|required",
            ];
        }

        return [];
    }
}







