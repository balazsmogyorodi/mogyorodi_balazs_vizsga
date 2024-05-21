<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    

    public function index(){
        return response()->json(Szavak::all());
    }


    public function szavak_temakent($id){
        return response()->json(DB::table("szavaks")
        ->where('temaId', '=', $id)
        ->get());


    }

}
