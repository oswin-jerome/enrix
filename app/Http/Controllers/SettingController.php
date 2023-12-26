<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegionRequest;
use App\Http\Requests\UpdateRegionRequest;
use App\Models\Region;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function index(Request $request): Response
    {


        $regions = Region::all();
        $users = User::all();

        return Inertia::render("Settings/Settings", [
            "regions" => $regions,
            "users" => $users,
        ]);
    }


    public function store_region(StoreRegionRequest $request): RedirectResponse
    {

        Region::create($request->validated());

        return Redirect::route("settings");
    }

    public function update_region(UpdateRegionRequest $request, Region $region): RedirectResponse
    {



        $region->update($request->validated());

        return Redirect::route("settings");
    }
}
