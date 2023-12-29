<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Notifications\RequestFulfilledNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // FIXME: if admin show all tasks, if region manager show regions tasks, if property manager show his properties tasks or tasks assigned to him 
        $tasks = Task::with("property")->where("status", "<>", "completed")->orderBy("created_at", "desc")->get();

        return Inertia::render("Tasks/Tasks", [
            "tasks" => $tasks
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $task = new TaskResource($task);
        // return response()->json($task);
        return Inertia::render("Tasks/TaskDetails", [
            "task" => $task
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            "status" => "required"
        ]);

        $task->status = $request->status;
        $task->save();
        $task->refresh();

        // ["opened", "inprogress", "closed", "rejected"]

        $reqModel = $task->request;
        if ($reqModel != null) {
            // Logic if task is created based on request
            // 1. Update status of request
            if ($task->status == "completed" || $task->status == "inprogress") {
                $reqModel->status = $task->status;
                $reqModel->save();
            }

            // 2. Send notification
            if ($task->status == "completed") {
                $task->property->customer->notify(new RequestFulfilledNotification($reqModel, $task));
            }
        }




        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
