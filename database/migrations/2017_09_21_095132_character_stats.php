<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CharacterStats extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('character_stats', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('character_id')
            ->unique();
            $table->unsignedSmallInteger('strength');
            $table->unsignedSmallInteger('stamina');
            $table->unsignedSmallInteger('quickness');
            $table->unsignedSmallInteger('dexterity');
            $table->unsignedSmallInteger('intelligence');
            $table->unsignedSmallInteger('willpower');
            $table->unsignedSmallInteger('perceptiveness');
            $table->unsignedSmallInteger('acumen');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('character_stats');
    }
}
