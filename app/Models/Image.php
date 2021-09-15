<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Image extends Model
{
    protected $fillable = [
        'image_url','product_id','principal'
    ];
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public static function set_image_principal($product_id,$image_id){
       $product = Product::find($product_id);
       $image = Image::find($image_id);
       $product->image_url = $image->image_url;
       $image->principal= 1;
       DB::table('images')
       ->where([['product_id', '=', $product_id], ['id', '<>', $image_id]])
       ->update(['principal' => 0]);
       if($image->save() && $product->save()){
           return true;
       }
       return false;
    }
//    public static function boot()
//    {
//        parent::boot();
//
//        self::created(function($model){
//            if ($model->principal){
//               $product= Product::find($model->product_id);
//               $product->image_url =$model->image_url;
//            }
//        });
//
//    }
}
