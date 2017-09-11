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

Route::middleware(['guest'])->group(function(){
  Route::get('/', function(){
    return redirect()->route('landing.about');
  })->name('home');

  Route::view('/about', 'landing.about')->name('landing.about');
  Route::get('/rules', 'RulesController@index')->name('landing.rules');
});

Route::get('/autosize-image/{width}-{image}', function($width, $image){
  dd($width);
})->where([
  'width' => '[0-9]+',
  'image' => '[0-9a-zA-Z]+'
]);
