<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RulesPageTest extends TestCase {
  use RefreshDatabase;

  /** @test */
  public function user_can_visit_terms_page() {
    $this->get(route('landing.rules'))
      ->assertViewIs('landing.rules');
  }

  /** @test */
  public function a_user_can_read_rules_of_the_game() {
    $rules = factory('App\Rules')->create();

    $this->get(route('landing.rules'))
      ->assertSee($rules->body);
  }
}
