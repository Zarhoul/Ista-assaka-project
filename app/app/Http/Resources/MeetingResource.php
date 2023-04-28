<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MeetingResource extends JsonResource
{
    static $wrap = false;
    public function toArray(Request $request): array
    {
        return [
            "id" => $this -> id,
            "created" => $this -> created,
            "status" => $this -> status,
            "meeting_time" => $this -> meeting_time,
        ];
    }
}
