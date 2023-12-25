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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();

            $table->string("property_id")->nullable()->unique();

            $table->string("name"); // Nick name used by customer
            $table->string("ref_name")->nullable(); // Used by internal team


            // FIXME: Map this to enums
            $table->enum("type", ["Flat", "Farm land", "Commercial", "Villa"]);
            $table->boolean("is_rented");


            // Approval
            $table->boolean("is_approved")->default(false);
            $table->dateTime("approved_at")->nullable();


            $table->unsignedBigInteger("region_id");
            $table->unsignedBigInteger("manager_id")->nullable();
            $table->timestamps();

            // Relations
            $table->foreign("region_id")->references("id")->on("regions");
            $table->foreign("manager_id")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
