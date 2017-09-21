<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{
    public function Character(){
        return $this->belongsTo('\App\Character');
    }

    public function toughness(){
        return $this->bigstatCalc($this->Strength, $this->Stamina);
    }

    public function agility(){
        return $this->bigstatCalc($this->Quickness, $this->Dexterity);
    }

    public function mind(){
        return $this->bigstatCalc($this->Intelligence, $this->Willpower);
    }

    public function Perception(){
        return $this->bigstatCalc($this->Perceptiveness, $this->Acumen);
    }


    //HELPERS

    protected function bigStatCalc($stat1, $stat2){
        return round(($stat1 + $stat2)/2, 2);
    }

    protected function fightStatCalc($stat1, $stat2){
        return round((($stat1 *2)+ $stat2)/3,2);
    }
}
