<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FrontPageTest extends TestCase {
  use RefreshDatabase;

  /** @test */
  public function a_user_entering_site_is_redirected_to_about_page() {
    $this->get('/')
      ->assertRedirect(route('landing.about'));
  }

  /** @test */
  public function a_user_visiting_about_page_can_see_informations_about_game() {
    $this->get(route('landing.about'))
      ->assertStatus(200)
      ->assertSee('Czym jest');
  }
}
