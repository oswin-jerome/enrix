<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ActivityLogsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('activity_logs')->delete();
        
        \DB::table('activity_logs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'type' => 'activity_1',
                'title' => 'Wall Painted',
                'description' => 'Front wall is fixed and painted',
                'recommendations' => 'Do a clear coat after 1 week',
                'has_followup' => 1,
                'property_id' => 1,
                'creator_id' => 1,
                'created_at' => '2023-12-28 17:27:03',
                'updated_at' => '2023-12-28 17:27:03',
                'task_id' => NULL,
            ),
        ));
        
        
    }
}