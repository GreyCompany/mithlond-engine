<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    protected $fillable = [
        'content'
    ];
    public function player(){
        return $this->belongsTo('App/User');
    }
}
