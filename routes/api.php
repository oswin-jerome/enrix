<?php

use App\Enums\PropertyType;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\PropertyController;
use App\Http\Controllers\Api\v1\RequestController;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return Property::first()->region->manager;
});

Route::prefix("v1")->group(function () {

    Route::post("/auth/register", [AuthController::class, "register"])->name("api.auth.register");
    Route::post("/auth/login", [AuthController::class, "login"])->name("api.auth.login");

    Route::middleware('auth:sanctum')->group(function () {
        Route::apiResource("properties", PropertyController::class);
        Route::apiResource("requests", RequestController::class);
    });
});
