<?php

namespace App\Character;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function Character(){
        return $this->belongsTo('\App\Character');
    }
}
