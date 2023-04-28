<?php

namespace App\Http\Controllers;

use App\Models\Meeting;

use App\Http\Requests\MeetingRequest;

use App\Http\Resources\MeetingResource;
use App\Http\Resources\MeetingCollection;

use App\Traits\checkInput;
use App\Traits\jsonResponse;

use App\Http\Auth;

class MeetingController extends Controller
{
    use checkInput;
    use jsonResponse;
    public function index()
    {
        return new MeetingCollection(Auth::user() -> meetings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MeetingRequest $request)
    {
        // Auth::user() -> meetings() -> save([

        // ])

        $meeting = Meeting::create([
            "user" => Auth::user() -> id,
            "created" => now(),
        ]);

        $meeting -> status = "pending";
        
        return new MeetingResource($meeting);
    }

    /**
     * Display the specified resource.
     */
    public function show(Meeting $meeting)
    {
        return new MeetingResource($meeting);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MeetingRequest $request, Meeting $meeting)
    {
        $updateArr = $request -> only("status", "meeting_time");

        $meeting -> update($updateArr);
        return $this -> res(["status" => "meeting updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meeting $meeting)
    {
        $meeting -> delete();
        return $this -> res(["status" => "meeting deleted successfully"], 200);
    }
}
