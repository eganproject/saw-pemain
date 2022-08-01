<?php

namespace App\Http\Controllers;

use App\Models\Alternatif;
use App\Models\Kriteria;
use App\Models\KriteriaPemain;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AlternatifController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render('Admin/Pemain', ['alternatif' => Alternatif::paginate(5)]);
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
        Alternatif::create(['kode' => $request->kodepemain, 'nama_alternatif' => $request->namapemain, 'keterangan' => $request->keterangan]);

        $kriteria = Kriteria::all();
        $newAlternatif = Alternatif::orderBy('created_at', 'desc')->first();

        foreach ($kriteria as $kr) {
            KriteriaPemain::create(['id_alternatif' => $newAlternatif['id'], 'id_kriteria' => $kr->id, 'nilai' => -1]);
        }

        return redirect()->back()->with('success', 'Data Pemain Ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Alternatif  $alternatif
     * @return \Illuminate\Http\Response
     */
    public function show(Alternatif $alternatif)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Alternatif  $alternatif
     * @return \Illuminate\Http\Response
     */
    public function edit(Alternatif $alternatif)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Alternatif  $alternatif
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Alternatif::where('id', $request->id)->update(['kode' => $request->kode, 'nama_alternatif' => $request->nama_alternatif, 'keterangan' => $request->keterangan]);

        return redirect()->back()->with('success', 'Data DiUpdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Alternatif  $alternatif
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Alternatif::destroy($request->id);
        $kriteriaPemain = KriteriaPemain::where('id_alternatif', $request->id)->get();
        foreach ($kriteriaPemain as $kp) {
            KriteriaPemain::destroy($kp->id);
        }
        return redirect()->back()->with('success', 'Data Dihapus');
    }
}
