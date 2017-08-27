<?php

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

Route::redirect('/', '/about');

Route::view('/about', 'home')->name('landing.about');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
