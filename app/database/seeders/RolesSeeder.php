<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Roles;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    Roles::create(['name' => 'ADMIN']);
    Roles::create(['name' => 'CONSULOR']);
    Roles::create(['name' => 'PRESIDENT']);
    Roles::create(['name' => 'TRAINER']);
    Roles::create(['name' => 'TRAINEE']);
}
}