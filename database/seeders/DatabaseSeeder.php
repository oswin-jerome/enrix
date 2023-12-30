<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();



        $this->call([
            RolesAndPermissionSeeder::class,
            RegionSeeder::class,

        ]);

        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@app.com',

        ]);
        $admin->assignRole('super_admin');
        $manager = User::factory()->create([
            'name' => 'Manager User',
            'email' => 'manager@app.com',

        ]);
        $manager->assignRole('manager');

        $this->call(CustomersTableSeeder::class);
        $this->call(PropertiesTableSeeder::class);
        $this->call(ActivityLogsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(FinanceCategorySeeder::class);
    }
}
