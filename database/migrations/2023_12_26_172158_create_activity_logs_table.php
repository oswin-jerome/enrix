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
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            // type
            $table->enum("type", ["activity_1"])->default("activity_1");
            $table->string("title");
            $table->longText("description");
            $table->longText("recommendations")->nullable();
            $table->boolean("has_followup");

            $table->unsignedBigInteger("property_id");
            $table->foreign("property_id")->references("id")->on("properties");

            $table->unsignedBigInteger("creator_id")->nullable();
            $table->foreign("creator_id")->references("id")->on("users");



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
