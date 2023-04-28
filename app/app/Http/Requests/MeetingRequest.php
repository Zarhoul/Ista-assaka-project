<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\jsonFailedValidation;
use App\Http\Auth;

class MeetingRequest extends FormRequest
{
    use jsonFailedValidation;
    public function authorize(): bool {
        $method = $this -> method();

        if (in_array($method, ["PUT", "DELETE"]))
            return Auth::hasRole([ADMIN]);

        if (in_array($method, ["GET", "POST"]))
            return Auth::hasRole([TRAINEE]);

        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $method = $this -> method();
        if($method === "PUT")
            return [
                "status" => ["regex:/(pending)|(accepted)|(rejected)/"],
            ];

        if($method == "POST")
        return [];
    }
}
