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
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->enum("category", ["maintenance", "bill payment"]);
            $table->longText("description");
            $table->enum("status", ["opened", "inprogress", "completed", "rejected"])->default("opened");
            $table->longText("rejection_reason")->nullable();
            $table->dateTime("approved_at")->nullable();

            $table->unsignedBigInteger("acted_by")->nullable();
            $table->foreign("acted_by")->references("id")->on("users");

            $table->unsignedBigInteger("property_id");
            $table->foreign("property_id")->references("id")->on("properties");

            $table->unsignedBigInteger("task_id")->nullable();
            $table->foreign("task_id")->references("id")->on("tasks");



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
