<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{

    // RELATIONSHIP
    public function player(){
        return $this->belongsTo('App/User');
    }

    public function race(){
        return $this->belongsTo('App/Character/Race');
    }

    public function class(){
        return $this->belongsTo('App/Character/Profession');
    }

    public function origin(){
        return $this->belongsTo('App/Character/Origin');
    }

    public function CharacterStats(){
        return $this->hasOne('App/Character/Stats', 'Character_id');
    }
    public function CharacterProfiles(){
        return $this->hasOne('App/Character/Profile', 'Character_id');
    }


    // 

    public function addExp($amount){
        $this->experience += $amount;
        $this->save();
    }

    public function spendExp($amount){
        if ($this->experience>$amount){
            $this->experience -= $amount;
            $this->save();
            return true;
        }
    }
}
