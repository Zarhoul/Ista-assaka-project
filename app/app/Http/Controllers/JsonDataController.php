<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JsonDataController extends Controller
{
    public function import(Request $request)
    {
        $file = $request->file("C:\Users\ELBAQQALY\Downloads\data(1).json");
        $json = json_decode(file_get_contents($file), true);

        foreach ($json as $data) {
            DB::table('filieres')->insert([
                "NameFormation" => $data['Filière'],
                "abbreviation"=>$data["abbreviation"],
                "NiveauFormation"=>$data["Niv"],
                "TypeFormation"=>$data["Type Formation"],
                "AnneeEtude"=>$data["Annee Etude"],
                "ModeFormation"=>$data["ModeFormation"],
                "NiveauScolaire"=>$data["NiveauScolaire"],
                "url"=>$data["url"],
                // add more columns as necessary
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json(['success' => true]);
    }
}

