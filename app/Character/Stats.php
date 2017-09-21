<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{
    public function Character(){
        return $this->belongsTo('\App\Character');
    }





    //HELPERS

    public function bigStatCalc($stat1, $stat2){
        return ($stat1 + $stat2)/2;
    }

    public function fightStatCalc($stat1, $stat2){
        return (($stat1 *2)+ $stat2)/3;
    }
}
