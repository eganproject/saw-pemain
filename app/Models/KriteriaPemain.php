<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KriteriaPemain extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['Kriteria'];

    function Kriteria()
    {
        return $this->hasOne(Kriteria::class, 'id', 'id_kriteria');
    }
}
