<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function create()
    {
        return view('create');
    }

    public function index()
    {
        return view('index');
    }

    public function store (){
        error_log("Album submitted!!");
        return redirect()->route('index');
    }
}
