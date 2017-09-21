<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    public function  characters(){
    return $this->hasMany('/App/Character', "race_id");
    }
}
