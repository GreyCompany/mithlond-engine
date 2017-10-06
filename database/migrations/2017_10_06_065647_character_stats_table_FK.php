<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CharacterStatsTableFK extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('character_stats', function (Blueprint $table) {
            $table->foreign('character_id')
            ->references('id')->on('characters')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('character_stats', function (Blueprint $table) {
            $table->dropForeign(['character_id']);
        });
    }
}
