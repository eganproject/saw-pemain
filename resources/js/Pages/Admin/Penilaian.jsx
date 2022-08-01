import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import TableNormalisasiMatriks from '@/Components/TableNormalisasi';
import TablePembobotan from '@/Components/TablePembobotan';

export default function Penilaian(props) {
    // console.log(props)
    const pengingatnya = props.pengingat; 
    // console.log('pengingatnya', pengingatnya);
    return (
        <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Perhitungan</h2>}
        >
            <Head title="Perhitungan" />

{pengingatnya ?  
                <>
                        <div className="py-12">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 bg-white border-b border-gray-200 grid grid-cols-3 gap-3">
                                            <div className="text-center">
                                                <a href="#normalisasiMatriks" className='font-bold hover:text-xl duration-300'>Normalisasi Matriks</a>
                                            </div>
                                            <div className="text-center" >
                                                <a href="#pembobotan" className='font-bold hover:text-xl duration-300'>Pembobotan</a>
                                            </div>
                                            <div className="text-center">
                                                <a href="#ranking" className='font-bold hover:text-xl duration-300'>Ranking</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6" id="normalisasiMatriks">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h2 className='font-bold text-center text-xl'>Normalisasi Matriks</h2>

                                            <TableNormalisasiMatriks kriteria={props.kriteria} alternatif={props.alternatif} kriteriaPemain={props.kriteriaPemain} min={props.min} max={props.max}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6" id="pembobotan">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h2 className='font-bold text-center text-xl'>Pembobotan</h2>

                                            <TablePembobotan kriteria={props.kriteria} alternatif={props.alternatif} kriteriaPemain={props.kriteriaPemain} min={props.min} max={props.max}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </>
: 
        <div className="py-12">
           <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                            <p className='text-center text-red-600 font-bold'>Check Kembali Data Anda !!</p>
                        </div>
                    </div>
                </div>
            </div>
        

}


            

        </Authenticated>
    );
}
