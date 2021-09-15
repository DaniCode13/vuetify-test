<?php

namespace App\Providers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Support\ServiceProvider;

class ProviderImage extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Image::updated(function($model){

        });

    }
}
