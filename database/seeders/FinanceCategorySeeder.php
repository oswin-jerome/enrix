<?php

namespace Database\Seeders;

use App\Models\FinanceCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FinanceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FinanceCategory::create([
            "name" => "Purchase",
            "type" => "expense"
        ]);
        FinanceCategory::create([
            "name" => "Salary",
            "type" => "expense"
        ]);
        FinanceCategory::create([
            "name" => "Maintenance",
            "type" => "expense"
        ]);
        FinanceCategory::create([
            "name" => "Pest Control",
            "type" => "expense"
        ]);


        FinanceCategory::create([
            "name" => "Rent",
            "type" => "income"
        ]);
        FinanceCategory::create([
            "name" => "Agriculture Income",
            "type" => "income"
        ]);
    }
}
