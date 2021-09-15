<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->delete();
        $tags = [
            ['id' =>"1",'name'=>"Hombre",'active'=>1],
            ['id' =>"2",'name'=>"Mujer",'active'=>1],
            ['id' =>"3",'name'=>"Nuevo",'active'=>1],
            ['id' =>"4",'name'=>"Usado",'active'=>1],
            ['id' =>"5",'name'=>"Grande",'active'=>1],
            ['id' =>"6",'name'=>"Chica",'active'=>1],
            ['id' =>"7",'name'=>"Mediana",'active'=>1],
            ['id' =>"8",'name'=>"Niño",'active'=>1],
            ['id' =>"9",'name'=>"Adulto",'active'=>1],
        ];
        DB::table('tags')->insert($tags);


    }
}
