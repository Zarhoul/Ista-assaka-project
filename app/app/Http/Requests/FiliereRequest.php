<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\jsonFailedValidation;
use App\Http\Auth;

class FiliereRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    use jsonFailedValidation;
    public function authorize(): bool
    {
         $method = $this -> method();

        if (in_array($method, ["PUT", "DELETE","POST"]))
            return Auth::hasRole([ADMIN]);

        if (in_array($method, ["GET" ]))
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
        $method = request() -> method();
        if(in_array($method, ["POST", "PUT"]))
            return [
                "NameFormation"=>'string|required',
                "abbreviation"=>"",
                "NiveauFormation"=>["regex:/(Technicien spécialisé)|(Technicien)|(Qualification)|(BP)|(Spécialisation)/"],
                "TypeFormation"=>["regex:/(Diplômante)|(Diplômante)/"],
                "AnneeEtude"=>["regex:/(Première année)|(Deuxième année)/"],
                "ModeFormation"=>["regex:/(Cours du jour)|(Cours du soir)/"],
                "NiveauScolaire"=>["regex:/(Lycéen)|(Bachelier)|(Bac +3)|(passrelle)/"],
                "url"=>'string|required'
            ];
        return [
            //
        ];
    }
}

