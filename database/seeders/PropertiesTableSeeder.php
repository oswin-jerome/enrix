<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        DB::table('properties')->delete();

        DB::table('properties')->insert(array(
            0 =>
            array(
                'id' => 1,
                'property_id' => 'FLT01NGL',
                'legal_owner_name' => 'Oswin Jerome',
                'name' => 'Property 2',
                'ref_name' => NULL,
                'type' => 'Flat',
                'is_rented' => 0,
                'is_under_loan' => 0,
                'year_of_construction' => 2018,
                'sq_ft' => 1800,
                'no_of_floors' => 1,
                'eb_consumer_no' => '129292',
                'property_tax_no' => 'TN 010202',
                'water_tax_no' => '12',
                'survey_no' => '12222',
                'property_address' => '1/11, Rajuji Manaji Bldg, Sun Mill Rd, Lower Parel Mumbai, Maharashtra, 400013',
                'property_city' => 'Chennai',
                'property_state' => 'Tamil Nadu',
                'property_landmark' => 'Near SBI Bank',
                'poc_name' => 'Rahul',
                'poc_mobile' => '+91 199203030',
                'poc_email' => 'rahul@gmail.com',
                'poc_address' => 'No 1, Krishna Palace, Neelam Flyover Delhi, Haryana, 121001',
                'poc_city' => 'Chennai',
                'poc_state' => 'Tamil Nadu',
                'poc_id_proof' => 'ID123',
                'poc_relation' => 'Brother',
                'approved_at' => '2023-12-28 17:25:11',
                'rejected_at' => NULL,
                'region_id' => 1,
                'customer_id' => 1,
                'manager_id' => 2,
                'created_at' => '2023-12-28 17:06:41',
                'updated_at' => '2023-12-28 17:25:11',
            ),
        ));
    }
}
