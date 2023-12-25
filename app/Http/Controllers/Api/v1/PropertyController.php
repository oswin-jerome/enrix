<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CreatePropertyApiRequest;
use App\Models\Property;
use App\Notifications\CustomerCreatedAPropertyNotification;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePropertyApiRequest $request)
    {
        $request->validated();
        $property = Property::create($request->validated());
        // TODO: Send notification to region manager and admin
        $property->region->manager->notify(new CustomerCreatedAPropertyNotification($property));

        // TODO: add approval process
        // TODO: Approval by region manager

        return response()->json($property, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        return response($property->with("region")->get());
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
