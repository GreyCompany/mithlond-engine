<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    Schema::defaultStringLength(191); // TODO: Make sure if final host server needs that line.
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    //
  }
}
