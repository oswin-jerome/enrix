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
            $table->string("legal_owner_name");

            $table->string("name"); // Nick name used by customer
            $table->string("ref_name")->nullable(); // Used by internal team


            // ################# BASIC DETAILS #########################
            // FIXME: Map this to enums
            $table->enum("type", ["Flat", "Farm land", "Commercial", "Villa"]);
            $table->boolean("is_rented")->default(false);
            $table->boolean("is_under_loan")->default(false);
            $table->integer("year_of_construction")->nullable();
            $table->integer("sq_ft")->default(0);
            $table->integer("no_of_floors")->default(0);
            $table->string("eb_consumer_no")->nullable();
            $table->string("property_tax_no")->nullable();
            $table->string("water_tax_no")->nullable();
            $table->string("survey_no")->nullable();
            $table->longText("property_address")->nullable();
            $table->longText("property_city")->nullable();
            $table->longText("property_state")->nullable();
            $table->longText("property_landmark")->nullable();


            // ################# END OF BASIC DETAILS #########################


            // ################# POC DETAILS #########################

            $table->string("poc_name")->nullable();
            $table->string("poc_mobile")->nullable();
            $table->string("poc_email")->nullable();
            $table->longText("poc_address")->nullable();
            $table->string("poc_city")->nullable();
            $table->string("poc_state")->nullable();
            $table->string("poc_id_proof")->nullable();
            $table->string("poc_relation")->nullable();

            // ################# END OF POC DETAILS #########################

            // Approval
            $table->dateTime("approved_at")->nullable();
            $table->dateTime("rejected_at")->nullable();


            // 


            $table->unsignedBigInteger("region_id");
            $table->unsignedBigInteger("customer_id");
            $table->unsignedBigInteger("manager_id")->nullable();
            $table->timestamps();

            // Relations
            $table->foreign("region_id")->references("id")->on("regions");
            $table->foreign("manager_id")->references("id")->on("users");
            $table->foreign("customer_id")->references("id")->on("customers");
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
