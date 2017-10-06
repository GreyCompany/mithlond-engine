<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Origin extends Model
{
    public function  characters(){
    return $this->hasMany('/App/Character', "origin_id");
    }
}
