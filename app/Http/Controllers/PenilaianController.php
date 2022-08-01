<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use App\Models\Kriteria;
use App\Models\KriteriaPemain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PenilaianController extends Controller
{
    public function index()
    {
        $kriteria = Kriteria::all();
        $alternatif = Alternatif::all();
        $kriteriaPemain = KriteriaPemain::all();
        $min = DB::select('select id_kriteria, min(nilai) as min from kriteria_pemains group by id_kriteria');
        $max = DB::select('select id_kriteria, max(nilai) as max from kriteria_pemains group by id_kriteria');
        $x = KriteriaPemain::where('nilai', -1)->first();


        if ($x !== null || $x == null) {
            return Inertia::render('Admin/Penilaian', ['kriteria' => $kriteria, 'alternatif' => $alternatif, 'kriteriaPemain' => $kriteriaPemain, 'min' => $min, 'max' => $max]);
        } else {
            return Inertia::render('Admin/Penilaian', ['kriteria' => $kriteria, 'alternatif' => $alternatif, 'kriteriaPemain' => $kriteriaPemain, 'min' => $min, 'max' => $max])->with('pengingat', 'Harap isi data dahulu !!')->with('pengingat', null);
        }
    }
}
