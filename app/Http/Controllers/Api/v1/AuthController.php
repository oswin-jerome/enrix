<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginApiRequest;
use App\Http\Requests\Api\RegisterCustomerApiRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(RegisterCustomerApiRequest $request)
    {

        $customer = Customer::create($request->validated());
        // FIXME: Hash password before storing in DB
        $customer->password = Hash::make($request->password);
        $customer->save();

        $customer->password = "";
        return response()->json($customer, 201);
    }


    public function login(LoginApiRequest $request)
    {

        $request->validated();

        if (!Auth::guard("customer")->attempt($request->validated())) {
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        $token = $request->user("customer")->createToken("app_token");

        return response($token);
    }
}
