<?php

use Illuminate\Support\Facades\Route;

Route::get('/create', [\App\Http\Controllers\AlbumController::class, 'create'])->name("create.album");

Route::get("/index", [\App\Http\Controllers\AlbumController::class, 'index'])->name("index");

Route::post("/store", [\App\Http\Controllers\AlbumController::class, 'store'])->name("album.store");
