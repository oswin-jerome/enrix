<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FinanceTransactionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/settings', [SettingController::class, 'index'])->name('settings');
    Route::post('/settings/regions', [SettingController::class, 'store_region'])->name('settings.store_region');
    Route::put('/settings/regions/{region}', [SettingController::class, 'update_region'])->name('settings.update_region');

    Route::resource("users", UserController::class);
    Route::resource("customers", CustomerController::class);


    // +++++++++++++++++++ PROPERTY ROUTES ++++++++++++++++++++++++++

    Route::prefix("/properties/{property}")->group(function () {
        Route::resource("activity_logs", ActivityLogController::class);
        Route::resource("finance/transactions", FinanceTransactionController::class);
    });


    Route::get("properties/approvals", [PropertyController::class, "approvals"])->name("properties.approval");
    Route::get("properties/{property}/onboard", [PropertyController::class, "onboard"])->name("properties.onboard");
    Route::put("properties/{property}/approve", [PropertyController::class, "approve"])->name("properties.approve");
    Route::resource("properties", PropertyController::class);

    Route::resource("tasks", TaskController::class);
    Route::resource("requests", RequestController::class);
    Route::post("requests/{request}/approve", [RequestController::class, "approve"])->name("requests.approve");
    Route::post("requests/{request}/reject", [RequestController::class, "reject"])->name("requests.reject");
});

require __DIR__ . '/auth.php';
