<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use App\Models\Kriteria;
use App\Models\KriteriaPemain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HasilController extends Controller
{
    public function index()
    {

        $kriteria = Kriteria::all();
        $alternatif = Alternatif::all();
        $kriteriaPemain = KriteriaPemain::all();
        $min = DB::select('select id_kriteria, min(nilai) as min from kriteria_pemains group by id_kriteria');
        $max = DB::select('select id_kriteria, max(nilai) as max from kriteria_pemains group by id_kriteria');
        $x = KriteriaPemain::where('nilai', -1)->first();

        $simpul = [];

        foreach ($alternatif as $alt) {
            $r = [$alt->nama_alternatif];
            $p = DB::table('kriteria_pemains')->where('kriteria_pemains.id_alternatif', $alt->id)->join('kriterias', 'kriteria_pemains.id_kriteria', '=', 'kriterias.id')->get();
            foreach ($p as $krit) {
                $s = [];
                if ($krit->nama_kriteria === "Shooting") {
                    if ($krit->nilai > 7) {
                        // dd($alt->nama_alternatif);
                        foreach ($p as $krit2) {
                            if ($krit2->nama_kriteria === "Heading") {
                                if ($krit2->nilai > 7) {
                                    array_push($r, "Striker");
                                }
                            }
                        }
                    }
                }
                if ($krit->nama_kriteria === "Tackle") {
                    if ($krit->nilai > 7) {
                        foreach ($p as $krit2) {
                            if ($krit2->nama_kriteria === "Intersave") {
                                if ($krit2->nilai > 7) {
                                    array_push($r, "Bek");
                                }
                            }
                        }
                    }
                }
                if ($krit->nama_kriteria === "Passing") {
                    if ($krit->nilai > 7) {
                        foreach ($p as $krit2) {
                            if ($krit2->nama_kriteria === "Dribling") {
                                if ($krit2->nilai > 7) {
                                    array_push($r, "Gelandang/Striker");
                                }
                            }
                        }
                    }
                }
                if ($krit->nama_kriteria === "Tangkap") {
                    if ($krit->nilai > 7) {
                        foreach ($p as $krit2) {
                            if ($krit2->nama_kriteria === "Intersave") {
                                if ($krit2->nilai > 7) {
                                    array_push($r, "Kiper");
                                }
                            }
                        }
                    }
                }
                // if (count($s) !== 0) {

                //     array_push($r, $s);
                // }
                // print_r($s);
            }
            array_push($simpul, $r);
        }


        // dd($simpul);

        if ($x !== null || $x == null) {
            return Inertia::render('Admin/Hasil', ['kriteria' => $kriteria, 'alternatif' => $alternatif, 'kriteriaPemain' => $kriteriaPemain, 'min' => $min, 'max' => $max, 'simpul' => $simpul]);
        } else {
            return Inertia::render('Admin/Hasil', ['kriteria' => $kriteria, 'alternatif' => $alternatif, 'kriteriaPemain' => $kriteriaPemain, 'min' => $min, 'max' => $max, 'simpul' => $simpul])->with('pengingat', 'Harap isi data dahulu !!')->with('pengingat', null);
        }
    }
}
