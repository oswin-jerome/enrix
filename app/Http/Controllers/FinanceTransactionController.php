<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Models\FinanceCategory;
use App\Models\FinanceTransaction;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FinanceTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, Property $property)
    {

        $financeTransactions = $property->finance_transactions()->with("category");

        if ($request->filled("start_date") && $request->filled("end_date")) {
            $financeTransactions = $financeTransactions->whereBetween('created_at', [$request->input('start_date'), $request->input('end_date')]);
        }

        if ($request->filled("category")) {
            $financeTransactions->where('finance_category_id', $request->input("category"));
        }

        $financeTransactions = $financeTransactions->get();


        return Inertia::render("Properties/Finances/Transactions", [

            "property" => $property,
            // FIXME: Fetch category after user selects type
            "categories" => FinanceCategory::all(),
            "finance_transactions" => $financeTransactions

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
    public function store(StoreTransactionRequest $request, Property $property)
    {
        $data  = $request->validated();
        $property->finance_transactions()->create($data);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(FinanceTransaction $financeTransaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FinanceTransaction $financeTransaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FinanceTransaction $financeTransaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FinanceTransaction $financeTransaction)
    {
        //
    }
}
