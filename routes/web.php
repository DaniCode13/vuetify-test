<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/admin', 'AdminController@index')->name('admin');
Route::get('/admin/{any}', 'AdminController@index')->where('any', '.*');

Route::prefix('api/v1/')->group(function () {
    Route::apiResource('products.images',"ImagesController");
    Route::apiResource('products',"ProductsController");
    Route::patch('products/{product_id}/images/{image_id}/principal','ImagesController@set_principal');
    Route::get('tags',"TagsController@index");
});




