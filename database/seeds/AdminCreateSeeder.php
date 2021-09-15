<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminCreateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('users')->insert([
            'id' => '1',
            'name' => "Daniel Perez Baltazar",
            'email' => env('ADMIN_EMAIL'),
            'password' => bcrypt(env('ADMIN_PASSWORD')),
            'is_admin' => 1,
        ]);
    }
}
