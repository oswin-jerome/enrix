<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreRequestApiRequest;
use App\Models\Request as RequestModel;
use Illuminate\Http\Request;

class RequestController extends Controller
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
    public function store(StoreRequestApiRequest $request)
    {
        $data = $request->validated();

        $req = RequestModel::create($data);

        return response()->json($req, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(RequestModel $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestModel $request, Request $requests)
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
