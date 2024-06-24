<?php

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\rolescontrollers;
use App\Http\Controllers\UserController;

Route::post('/role',[rolescontrollers::class,'store']);
Route::get('/role',[rolescontrollers::class,'getall']);
Route::post('/users', [UserController::class, 'storeuser']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/Need', [UserController::class, 'getNeed']);
Route::delete('/users/clear', [UserController::class, 'deleteAll']);
Route::post('/users/status', [UserController::class, 'changeStatus']);
Route::delete('/users/delete', [UserController::class, 'delete']);
Route::post('/users/role/{role_id}', [UserController::class, 'changeRole']);
Route::post('/users/changepassword', [UserController::class, 'changePassword']);
Route::get('users/search', [UserController::class, 'searchByName']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
