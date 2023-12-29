<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CreatePropertyApiRequest;
use App\Models\Property;
use App\Models\User;
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
        $data = $request->validated();
        unset($data['auth_letter']);
        $user = User::find(auth()->id());
        $property = $user->properties()->create($data);

        // TODO: Process Auth letter
        if ($request->hasFile("auth_letter")) {
            $property->addMediaFromRequest("auth_letter")->toMediaCollection('auth_letters');
        }


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
