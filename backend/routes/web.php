<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FilmController;

Route::get('/', function () {
    return "This is our IE104 project. It's created by Nguyen Tan Manh.";
});

Route::get('/api/film', [FilmController::class, 'show']);


