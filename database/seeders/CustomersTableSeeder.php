<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('customers')->delete();
        
        \DB::table('customers')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Oswin Jerome',
                'email' => 'oswinjeromej@gmail.com',
                'password' => '$2y$12$wXqKPA10E3KqXzUlVS0b5OCPeXRFfcRO2Ro7n4lELtXhe3r1svTIO',
                'created_at' => '2023-12-28 17:06:27',
                'updated_at' => '2023-12-28 17:06:27',
            ),
        ));
        
        
    }
}