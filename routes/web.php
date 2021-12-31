<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/receipts', function (Request $request) {
    return Inertia::render('Receipts', [
        'receipts' => auth()->user()->receipts->map(function ($userReceipts) {
            return [
                'amount' => $userReceipts->amount,
                'paid_at' => $userReceipts->paid_at->toFormattedDateString(),
                'receipt_url' => $userReceipts->receipt_url,
            ];
        }),
    ]);
})->name('receipts');

Route::middleware(['auth:sanctum', 'verified'])->get('/store', function (Request $request) {
    return Inertia::render('Store', [
        'productOneLink' => auth()->user()->chargeProduct($productId = 21582),
        'productWaveLink' => auth()->user()->chargeProduct($productId = 21584),
    ]);
})->name('store');
