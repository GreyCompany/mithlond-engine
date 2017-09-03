<?php

use Faker\Generator as Faker;

$factory->define(\App\Rules::class, function (Faker $faker) {
  return [
    'body' => $faker->paragraph(),
    'is_published' => true
  ];
});
