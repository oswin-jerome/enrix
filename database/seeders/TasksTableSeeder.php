<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tasks')->delete();
        
        \DB::table('tasks')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => '[Follow up]: Wall Painted',
                'description' => 'Front wall is fixed and painted',
                'status' => 'not_started',
                'eta' => '2023-12-28 17:27:03',
                'progress' => 0,
                'property_id' => 1,
                'assignee_id' => 1,
                'created_at' => '2023-12-28 17:27:03',
                'updated_at' => '2023-12-28 17:27:03',
            ),
        ));
        
        
    }
}