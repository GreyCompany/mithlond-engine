<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{
    protected $guarded = ['id', 'character_id'];


    // RELATIONSHIP


    public function Character(){
        return $this->belongsTo('\App\Character');
    }


    // BIG STATS


    public function getToughnessAttribute(){
        return $this->bigStatCalc($this->strength, $this->stamina);
    }

    public function getAgilityAttribute(){
        return $this->bigStatCalc($this->quickness, $this->dexterity);
    }

    public function getMindAttribute(){
        return $this->bigStatCalc($this->intelligence, $this->willpower);
    }

    public function getPerceptionAttribute(){
        return $this->bigStatCalc($this->perceptiveness, $this->acumen);
    }


    // COMBAT


    public function getStandardWeaponAttribute(){
        return $this->bigStatCalc($this->toughness, $this->agility);
    }

    public function getHeavyWeaponAttribute(){
        return $this->fightStatCalc($this->toughness, $this->agility);
    }

    public function getSophisticatedWeaponAttribute(){
        return $this->fightStatCalc($this->agility, $this->toughness);
    }

    public function getDistanceWeaponAttribute(){
        return $this->bigStatCalc($this->standard_weapon, $this->perception);
    }
    
    public function getDodgeAttribute(){
        return $this->fightStatCalc($this->agility, $this->perceptiveness);
    }

    public function getBlockAttribute(){
        return statRound((($this->stamina + $this->strength ) * 2 + $this->agility)/5);
    }

    public function getParryAttribute(){
        return statRound(($this->stamina * 2 + $this->quickness + $this->dexterity)/4);
    }

    // HELPERS

    protected function bigStatCalc($stat1, $stat2){
        return statRound(($stat1 + $stat2)/2);
    }

    protected function fightStatCalc($stat1, $stat2){
        return statRound(($stat1 * 2 + $stat2)/3);
    }
    
    protected function statRound($stat){
        return round($stat, 2);
    }
}
