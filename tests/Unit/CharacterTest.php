<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CharacterTest extends TestCase
{
  private $character;
  use RefreshDatabase;

  protected function setUp() {
    parent::setUp();

    $this->character = factory('App\Character')->create();
  }

  /** @test */
  public function it_has_owner() {
    $this->assertInstanceOf('App\User', $this->character->owner);
  }

  /** @test */
  /*public function it_has_profiles() {
    $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $this->character->profiles);
  }*/

  /** @test */
  /*public function it_has_stats(){
    $this->assertInstanceOf('App\Character\Stats', $this->character->stats);
  }*/

  /** @test */
  /*public function it_has_race() {
    $this->assertInstanceOf('App\Race', $this->character->race);
  }*/

  /** @test */
  /*public function it_has_class() {
    $this->assertInstanceOf('App\Class', $this->character->class);
  }*/
}
