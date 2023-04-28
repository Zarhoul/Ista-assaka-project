<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FiliereResource extends JsonResource
{
   /**
    * Transform the resource into an array.
    *
    * @return array<string, mixed>
    */
   public function toArray(Request $request): array
   {
      $formations = [];
      if($this -> coursJour)
         $formations[] = "Cours du jour";
      if($this -> coursSoir)
         $formations[] = "Cours du soir";

      return [
           "idFormation"=>$this->id,
           "NameFormation"=>$this->NameFormation,
           "abbreviation"=>$this->abbreviation,
           "NiveauFormation"=>$this->NiveauFormation,
           "TypeFormation"=>$this->TypeFormation,
           "AnneeEtude"=>$this->AnneeEtude ,
           "ModeFormation"=> $formations,
           "NiveauScolaire"=>$this->NiveauScolaire,
           "url"=>$this->url
      ];
   }
}
