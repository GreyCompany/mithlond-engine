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
Auth::routes();

Route::group('landing', function(){
  Route::get('/', function(){
    return redirect()->route('landing.about');
  })->name('home');

  Route::view('/about', 'home')->name('landing.about');
  Route::get('/rules', 'RulesController@index')->name('landing.rules');

})->middleware('guest');
