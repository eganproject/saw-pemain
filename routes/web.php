<?php

use App\Http\Controllers\AlternatifController;
use App\Http\Controllers\HasilController;
use App\Http\Controllers\KriteriaController;
use App\Http\Controllers\PenilaianController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->middleware('guest');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Alternatif/Pemain
Route::middleware(['auth', 'verified'])->controller(AlternatifController::class)->group(function () {
    Route::get('/alternatif', 'index')->name('alternatif');
    Route::post('/alternatif', 'store');
    Route::delete('/alternatif/delete', 'destroy');
    Route::put('/alternatif/update', 'update');
});


//Kriteria
Route::middleware(['auth', 'verified'])->controller(KriteriaController::class)->group(function () {
    Route::get('/kriteria', 'index')->name('kriteria');
    Route::post('/kriteria', 'store');
    Route::put('/kriteria/update', 'update');
    Route::delete('/kriteria/delete', 'destroy');
    Route::get('/kriteria/editkriteriapemain', 'editkriteriapemain')->name('kriteria.editkriteriapemain');
    Route::post('/kriteria/updatekriteriapemain', 'updatekriteriapemain');
    Route::post('/kriteria/ubahPerbandingan',  'ubahPerbandingan');
    Route::post('/kriteria/updateBobot',  'updateBobot');
});


Route::get('/penilaian', [PenilaianController::class, 'index'])->middleware(['auth', 'verified'])->name('penilaian');

Route::get('hasil', [HasilController::class, 'index'])->middleware(['auth', 'verified'])->name('hasil');

require __DIR__ . '/auth.php';
