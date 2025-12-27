<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/branches', [BranchController::class, 'index']);
Route::get('/branches/{id}', [BranchController::class, 'show']);
Route::post('/branches', [BranchController::class, 'store']);
Route::put('/branches/{id}', [BranchController::class, 'update']);
Route::delete('/branches/{id}', [BranchController::class, 'destroy']);
Route::get('/types', [TypeController::class, 'index']);
Route::get('/types/{id}', [TypeController::class, 'show']);
Route::post('/types', [TypeController::class, 'store']);
Route::put('/types/{id}', [TypeController::class, 'update']);
Route::delete('/types/{id}', [TypeController::class, 'destroy']);


Route::get('/promotions', [PromotionController::class, 'index']);
Route::get('/promotions/{id}', [PromotionController::class, 'show']);
Route::post('/promotions', [PromotionController::class, 'store']);
Route::put('/promotions/{id}', [PromotionController::class, 'update']);
Route::delete('/promotions/{id}', [PromotionController::class, 'destroy']);

Route::get('/films', [FilmController::class, 'index']);
Route::get('/films/{id}', [FilmController::class, 'show']);
Route::post('/films', [FilmController::class, 'store']);
Route::put('/films/{id}', [FilmController::class, 'update']);
Route::delete('/films/{id}', [FilmController::class, 'destroy']);

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);
?>