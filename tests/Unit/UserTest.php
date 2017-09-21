<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
  private $user;
  use RefreshDatabase;

  protected function setUp() {
    parent::setUp();

    $this->user = factory('App\User')->create();
  }

  /** @test */
  public function it_has_a_character() {
    $this->assertInstanceOf('App\Character', $this->user->character);
  }
}
