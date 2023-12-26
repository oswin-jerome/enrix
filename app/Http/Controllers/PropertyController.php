<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApprovePropertyRequest;
use App\Models\Property;
use App\Models\User;
use App\Notifications\PropertyApprovedNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $properties = Property::with("customer")->get();

        return Inertia::render("Properties/Properties", [
            "properties" => $properties
        ]);
    }


    public function approvals()
    {
        // FIXME: Show only my regions properties
        $properties = Property::where("approved_at", "=", null)
            ->where("rejected_at", "=", null)
            ->with("customer")
            ->get();


        return Inertia::render("Properties/Approval/List", [
            "properties" => $properties
        ]);
    }


    public function onboard(Property $property)
    {
        return Inertia::render("Properties/Approval/OnBoard", [
            "property" => $property,
            "customer" => $property->customer,
            "region" => $property->region,
            "users" => User::all()
        ]);
    }

    public function approve(ApprovePropertyRequest $request, Property $property)
    {
        if ($property->isApproved()) {
            throw ValidationException::withMessages([
                'approved' => "Property Already approved",
            ]);
        }

        $request->validated();
        $property->property_id = $request->property_id;
        $property->manager_id = $request->manager_id;
        $property->approved_at = Carbon::now();
        $property->save();
        $property->refresh();

        $property->customer->notify(new PropertyApprovedNotification($property));

        // TODO: redirect to property page once created
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
    public function show(Property $property)
    {

        $property =  Property::with("customer")->where("id", "=", $property->id)->firstOrFail();

        return Inertia::render("Properties/Details", [
            "property" => $property
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
