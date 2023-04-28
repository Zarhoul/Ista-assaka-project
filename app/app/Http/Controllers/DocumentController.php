<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Models\Document;

use App\Http\Requests\DocumentRequest;

use App\Http\Resources\DocumentResource;
use App\Http\Resources\DocumentCollection;

use App\Traits\checkInput;
use App\Traits\jsonResponse;

use App\Http\Auth;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use checkInput;
    use jsonResponse;
    public function index()
    {
        return new DocumentCollection(Auth::user() -> documents);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DocumentRequest $request)
    {
        $document = Document::create([
            "user" => Auth::user() -> id,
            "created" => now(),
        ]);

        $document -> status = "pending";
        
        return new DocumentResource($document);
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        return new DocumentResource($document);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DocumentRequest $request, Document $document)
    {
        $updateArr = $request -> only("status", "meeting_time");

        $document -> update($updateArr);
        return $this -> res(["status" => "document updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $document -> delete();
        return $this -> res(["status" => "document deleted successfully"], 200);
    }
}
