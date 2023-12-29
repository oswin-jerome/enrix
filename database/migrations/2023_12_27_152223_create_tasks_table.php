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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->longText("description");
            $table->enum("status", ["not_started", "inprogress", "completed", "hold"])->default("not_started");
            $table->dateTime("eta")->nullable(); // if set it is a followup task
            $table->integer("progress")->default(0);

            $table->unsignedBigInteger("property_id");
            $table->foreign("property_id")->references("id")->on("properties");

            $table->unsignedBigInteger("assignee_id")->nullable();
            $table->foreign("assignee_id")->references("id")->on("users");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
