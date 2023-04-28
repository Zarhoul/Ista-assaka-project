<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImportFiliereController extends Controller
{
    function import(){
        $fillieres = request() -> data;

        if ($fillieres !== null) {
            foreach($fillieres as $index => $filliere){
                $data = $filliere;
                if(in_array("Cours du jour", $data["ModeFormation"]))
                    $data["coursJour"] = 1;
    
                if(in_array("Cours du soir", $data["ModeFormation"]))
                    $data["coursSoir"] = 1;
    
                $data["url"] = "NA";
                $data["abbreviation"] = "NA";
                // default value for niveau scolaire
                $data["NiveauScolaire"] = "Bachelier";
    
                unset($data["ModeFormation"]);
    
                \App\Models\Filiere::create($data);
            }
        }
        


        return response() -> json($fillieres);
    }
}
