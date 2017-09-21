<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    public function player(){
        $this->belongsTo('App/User');
    }

    public function race(){
        $this->belongsTo('App/Character/Race');
    }

    public function class(){
        $this->belongsTo('App/Character/Profession');
    }

    public function CharacterStats(){
        $this->hasOne('App/Character/Stats', 'character_id');
    }
}
