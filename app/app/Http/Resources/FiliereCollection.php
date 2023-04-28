<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FiliereCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
         return [
            'data' => $this->collection->map(function ($filiere) {
                return [
                    "idFormation"=>$filiere->id,
                    "NameFormation"=>$filiere->NameFormation,
                    "abbreviation"=>$filiere->abbreviation,
                    "NiveauFormation"=>$filiere->NiveauFormation,
                    "TypeFormation"=>$filiere->TypeFormation,
                    "AnneeEtude"=>$filiere->AnneeEtude ,
                    "ModeFormation"=>$filiere->ModeFormation,
                    "NiveauScolaire"=>$filiere->NiveauScolaire,
                    "url"=>$filiere->url
                ];
            })->toArray()
        ];
    }
}
