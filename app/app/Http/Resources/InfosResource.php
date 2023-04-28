<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InfosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
    return [
                 'id' =>$this->id,
                'name' => $this->name,
                'date' => $this->date,
                'description' => $this->description,
                'email' => $this->email,
                'address' => $this->address,
                'phoneNumber' => $this->phoneNumber,

        ];
    }
    }
