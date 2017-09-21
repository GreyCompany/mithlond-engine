<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{
    protected $guarded = ['Id', 'Character_id'];


    // RELATIONSHIP


    public function Character(){
        return $this->belongsTo('\App\Character');
    }


    // BIG STATS


    public function toughness(){
        return $this->bigStatCalc($this->Strength, $this->Stamina);
    }

    public function agility(){
        return $this->bigStatCalc($this->Quickness, $this->Dexterity);
    }

    public function mind(){
        return $this->bigStatCalc($this->Intelligence, $this->Willpower);
    }

    public function perception(){
        return $this->bigStatCalc($this->Perceptiveness, $this->Acumen);
    }


    // COMBAT


    public function standardWeapon(){
        return $this->bigStatCalc($this->toughness(), $this->agility());
    }

    public function heavyWeapon(){
        return $this->fightStatCalc($this->toughness(), $this->agility());
    }

    public function sophisticatedWeapon(){
        return $this->fightStatCalc($this->agility(), $this->toughness());
    }

    public function distanceWeapon(){
        return $this->bigStatCalc($this->StandardWeapon(), $this->perception());
    }
    
    public function dodge(){
        return $this->fightStatCalc($this->agility(), $this->Perceptiveness);
    }

    public function block(){
        return ((($this->Stamina * 2)+($this->Strength *2)+$this->agility())/5);
    }

    public function parry(){
        return ((($this->Stamina * 2)+ $this->Quickness + $this->Dexterity)/4);
    }

    // HELPERS

    protected function bigStatCalc($stat1, $stat2){
        return round(($stat1 + $stat2)/2, 2);
    }

    protected function fightStatCalc($stat1, $stat2){
        return round((($stat1 *2)+ $stat2)/3,2);
    }
}
