<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TraineeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($trainee) {
                return [
                    "stg_id" => $trainee->id,
                    "user_id" => $trainee->user,
                    "CEF" => $trainee->CEF,
                    "diplomat" => $trainee->diplomat,
                    "dateNaissance" => $trainee->dateNaissance,
                    "codeMassar" => $trainee->codeMassar,
                    "idFiliere" => $trainee->idFiliere,
                ];
            })->toArray(),
        ];
    }
}
