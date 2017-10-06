<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CharactersTableConstraints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('characters', function (Blueprint $table) {
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
            $table->foreign('race_id')
            ->references('id')->on('races')
            ->onDelete('cascade');
            $table->foreign('profession_id')
            ->references('id')->on('professions')
            ->onDelete('cascade');
            $table->foreign('origin_id')
            ->references('id')->on('origins')
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
        Schema::table('characters', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['race_id']);
            $table->dropForeign(['profession_id']);            
            $table->dropForeign(['origin_id']);
        });
    }
}
