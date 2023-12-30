<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('finance_transactions', function (Blueprint $table) {
            $table->id();
            $table->enum("type", ["income", "expense"]);
            $table->longText("description")->nullable();
            $table->string("title")->nullable();

            $table->double("amount", 15, 2);

            $table->unsignedBigInteger("finance_category_id");
            $table->foreign("finance_category_id")->references("id")->on("finance_categories");

            $table->unsignedBigInteger("property_id");
            $table->foreign("property_id")->references("id")->on("properties");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('finance_transactions');
    }
};
