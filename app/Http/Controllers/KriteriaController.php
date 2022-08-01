<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use App\Models\Kriteria;
use App\Models\KriteriaPemain;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kriteria = Kriteria::paginate(5);
        $kriteriaPemain = KriteriaPemain::all();
        $alternatif = Alternatif::all();
        // $nilai = [];
        // foreach ($kriteriaPemain as $kp) {
        //     $nilai[] = ['id_alternatif' => $kp->id_alternatif, 'nilai' => $kp->nilai];
        // }

        return Inertia::render('Admin/Kriteria', ['kriteria' => Kriteria::all(), 'kriteriaPemain' => $kriteriaPemain, 'alternatif' => $alternatif, 'dataKriteria' => $kriteria]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        Kriteria::create(['kode' => $request->kodeKriteria, 'nama_kriteria' => $request->namakriteria, 'jenis' => $request->jenis, 'bobot' => $request->bobot]);

        $newKriteria = Kriteria::orderBy('created_at', 'desc')->first();

        $alternatif = Alternatif::all();
        foreach ($alternatif as $alt) {
            KriteriaPemain::create(['id_alternatif' => $alt['id'], 'id_kriteria' => $newKriteria['id'], 'nilai' => -1]);
        }


        return redirect()->back()->with('success', 'Kriteria ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function show(Kriteria $kriteria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function edit(Kriteria $kriteria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // dd($request);
        Kriteria::where('id', $request->id)->update(['kode' => $request->kode, 'nama_kriteria' => $request->nama_kriteria, 'jenis' => $request->jenis, 'bobot' => $request->bobot]);

        return redirect()->back()->with('success', 'Data Kriteria berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Kriteria::destroy($request->id);
        $kriteriaPemain = KriteriaPemain::where('id_kriteria', $request->id)->get();
        foreach ($kriteriaPemain as $kp) {
            KriteriaPemain::destroy($kp->id);
        }

        return redirect()->back()->with('success', 'Data Kriteria berhasil dihapus');
    }

    public function editkriteriapemain(Request $request)
    {

        $x = Alternatif::where('id', $request->id)->first();
        return Inertia::render('Admin/EditKriteriaPemain', ['kriteriaPemain' => KriteriaPemain::where('id_alternatif', $request->id)->get(), 'nama_alternatif' => $x->nama_alternatif]);
    }

    public function updatekriteriapemain(Request $request)
    {
        // dd($request);
        // $details = unique_multidim_array($request, [0]);
        // dd(collect($request));
        // dd($details);
        for ($i = 0; $i <= count(collect($request)); $i++) {
            if (isset($request[$i][1])) {

                KriteriaPemain::where('id', $request[$i][0])->update(['nilai' => $request[$i][1]]);
            }
        }

        return redirect('/kriteria')->with('success', 'Data Kriteria Pemain berhasil diubah');
    }
}
