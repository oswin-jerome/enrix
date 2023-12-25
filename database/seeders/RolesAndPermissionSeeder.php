<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdmin = Role::create(['name' => "super_admin"]);
        $admin = Role::create(['name' => "admin"]);
        $manager = Role::create(['name' => "manager"]);
        $user = Role::create(['name' => "user"]);
    }
}
