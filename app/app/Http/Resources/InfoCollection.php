<?php



namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class InfoCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // Transform each info in the collection
        return $this->collection->map(function ($info) {
            return [
                'id' => $info->id,
                'name' => $info->name,
                'date'=>$info->date,
                'description' => $info->description,
                'email' => $info->email,
                'address' => $info->address,
                'phoneNumber' => $info->phoneNumber,
            ];
        })->toArray();
    }
}
