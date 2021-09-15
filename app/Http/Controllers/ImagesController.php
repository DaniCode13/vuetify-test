<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        $images = $product->images;
        return response()->json($images, 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $product_id = $data['product_id'];
        $list_images = [];
        $this->check_directory_exists();
        $product = Product::find($product_id);
        foreach ($data['images'] as $key => $image) {
            $path = $this->save_formats_images($image);
            $new_image = null;
            $new_image = Product::find($product_id)->images()->create([
                "image_url" => $path,
                "principal" => ((is_null($product->image_url)) ? 1 : 0)
            ]);
            if (is_null($product->image_url)) {
                $product->image_url = $path;
                $product->save();
            }
            array_push($list_images, $new_image);
        }
        return response()->json($list_images, 201);
    }


    public function show(Image $image)
    {
        //
    }


    public function edit(Image $image)
    {
        //
    }

    public function set_principal($product_id, $image_id)
    {
        $query = Image::set_image_principal($product_id, $image_id);
        return response()->json($query, 200);
    }


    public function destroy(Product $product, Image $image)
    {
        $image->delete();
        $update_image_principal = null;
        if ($image->principal == 1) {
            $has_images = $product->images;
            if ($has_images->isEmpty()) {
                $product->image_url = null;
            } else {
                $other_image = $has_images->first();
                $update_image_principal = Image::find($other_image['id']);
                $update_image_principal->principal = 1;
                $update_image_principal->save();
                $product->image_url = $other_image['image_url'];
            }
            $product->save();
        }
        Storage::delete('/public/' . $image->image_url);

        return response()->json(null, 204);
    }


    private function save_formats_images($image)
    {
        $name_image = uniqid() . "." . $image->getClientOriginalExtension();
        $path = $image->storeAs('/images/original', $name_image, 'public');
        $original = \Intervention\Image\Facades\Image::make(storage_path("app/public/{$path}"));
        $original->backup();
        $original->resize(400, 400, function ($constraint) {
            $constraint->aspectRatio();
        })->save(storage_path("app/public/images/medium/{$name_image}"));
        $original->reset();
        $original->resize(100, 100)->save(storage_path("app/public/images/thumbnail/{$name_image}"));
        return $path;
    }

    private function check_directory_exists()
    {
        $medium = "public/images/medium";
        $small = "public/images/small";
        $thumbnail = "public/images/thumbnail";
        $directories = [$medium, $small, $thumbnail];
        foreach ($directories as $key => $directory) {
            if (!Storage::exists($directory)) {
                Storage::makeDirectory($directory, 0775, true);
            }
        }
    }
}
