<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Profession extends Model
{
    public function  characters(){
        $this->hasMany('/App/Character', "class_id");
        }
}
