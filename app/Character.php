<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    public function player(){
        return $this->belongsTo('App/User');
    }

    public function race(){
        return $this->belongsTo('App/Character/Race');
    }

    public function class(){
        return $this->belongsTo('App/Character/Profession');
    }

    public function CharacterStats(){
        return $this->hasOne('App/Character/Stats', 'character_id');
    }
}
