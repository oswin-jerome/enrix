<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreActivityLogRequest;
use App\Models\ActivityLog;
use App\Models\Property;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Property $property)
    {
        $activities = $property->activity_logs()->with("media")->with("creator")->orderBy("created_at", "desc")->get();

        return Inertia::render("Properties/ActivityLogs/ActivityLogs", [
            "property" => $property,
            "activities" => $activities
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActivityLogRequest $request, Property $property)
    {


        $data = $request->validated();
        $data['creator_id'] = auth()->id();

        $activity = $property->activity_logs()->create($data);

        if ($request->hasFile("attachment")) {
            $activity->addMediaFromRequest("attachment")->toMediaCollection('attachments');
        }

        if ($activity->has_followup) {
            $task = new Task();
            $task->title = "[Follow up]: " . $activity->title;
            $task->description =  $activity->description; // FIXME: get description from frontend
            $task->eta = Carbon::now(); // FIXME: get date from frontend
            $task->property_id = $property->id;
            $task->assignee_id = auth()->id();
            $task->save();
        }



        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(ActivityLog $activityLog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ActivityLog $activityLog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ActivityLog $activityLog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ActivityLog $activityLog)
    {
        //
    }
}
