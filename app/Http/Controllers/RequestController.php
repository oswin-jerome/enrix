<?php

namespace App\Http\Controllers;

use App\Models\Request as RequestModel;
use App\Models\Task;
use App\Notifications\RequestRejectedNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // TODO: apply filter 
        $requests = RequestModel::with("property:property_id,id")->where("acted_by", "=", null)->get();
        return Inertia::render("Requests/Requests", [
            "requests" => $requests
        ]);
    }

    public function approve(RequestModel $request)
    {
        // $request->status = "inprogress";
        $request->approved_at = Carbon::now();
        $request->acted_by = auth()->id();

        $task = new Task();
        $task->title = "[REQUEST] " . $request->type;
        $task->description = $request->description;
        $task->property_id = $request->property_id;
        $task->save();
        $task->refresh();

        $request->task_id = $task->id;
        $request->save();

        return redirect()->back();
    }

    public function reject(RequestModel $request, Request $req)
    {
        $req->validate([
            "reason" => "required|min:3"
        ]);

        $request->status = "rejected";
        $request->rejection_reason = $req->reason;
        $request->acted_by = auth()->id();
        $request->save();

        $request->property->customer->notify(new RequestRejectedNotification($req->reason));

        return redirect()->back();
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RequestModel $request)
    {
        $request = RequestModel::with("property")->find($request->id);
        return Inertia::render("Requests/RequestDetails", [
            "request" => $request
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RequestModel $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestModel $request, Request $req)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RequestModel $request)
    {
        //
    }
}
