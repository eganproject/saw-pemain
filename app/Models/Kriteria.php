<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Kriteria extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    // protected $foreignkey = ['id_kriteria'];
    // protected $with = ['KriteriaPemain'];

    function KriteriaPemain()
    {
        return $this->hasMany(KriteriaPemain::class, 'id_kriteria', 'id');
    }
}
