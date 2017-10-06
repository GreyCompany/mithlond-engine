<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')
            ->unique();
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
            $table->string('name')->unique();
            $table->string('family_name');
            $table->unsignedInteger('experience');
            $table->unsignedSmallInteger('race_id');
            $table->foreign('race_id')
            ->references('id')->on('races')
            ->onDelete('cascade');
            $table->unsignedSmallInteger('profession_id');
            $table->foreign('profession_id')
            ->references('id')->on('professions')
            ->onDelete('cascade');
            $table->unsignedSmallInteger('origin_id');
            $table->foreign('origin_id')
            ->references('id')->on('origins')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
