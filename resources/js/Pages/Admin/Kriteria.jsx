import React, {  useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { PostAPI } from '@/Services/API';
import TableKriteria from '@/Components/TableKriteria';
import TableKriteriaPemain from '@/Components/TableKriteriaPemain';
import TablePerbandinganBerpasangan from '@/Components/TablePerbandinganBerpasangan';
import TableNormalisasiKriteria from '@/Components/TableNormalisasiKriteria';


export default function Kriteria(props) {
    const [formkriteria, setFormKriteria] = useState(1);
    const [kodeKriteria, setkodeKriteria] = useState("");
    const [namakriteria, setNamaKriteria] = useState("");
    const [jenis, setJenis] = useState("");
    const [bobot, setBobot] = useState("");
    // console.log(props);
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            kodeKriteria,
            namakriteria,
            jenis,
            bobot
        }
        PostAPI('/kriteria', data);
        setkodeKriteria('');
        setNamaKriteria('');
        setBobot('');
    }

    const defaultnya = () => {
        return(
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-3 gap-3 items-center">
                        <div className='justify-center flex'>
                            <a className='font-bold hover:scale-110 duration-300' href='#dataKriteria'>Data Kriteria</a>
                        </div>
                        <div className='justify-center flex'>
                            <a className='font-bold hover:scale-110 duration-300' href='#dataKriteriaPemain'>Data Kriteria Pemain</a>
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200 justify-end flex">
                            <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-full text-center text-block border-collapse outline-4px hover:bg-[#25e157]'><span className='font-bold text-white font-style: italic text-sm hover:text-base; ' onClick={() => setFormKriteria(formkriteria + 1)}>Tambah Kriteria</span></button>
                        </div>
                    </div>
                </div>
                    )
                }
    const tambahKriteria = () => {
        return(
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-2 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-2 gap-4 items-center ">
                        <div></div>
                        <div className='place-self-end mr-4 mt-2'>
                            <p className='text-md hover:cursor-pointer hover:text-lg  rounded-full border-radius-8px outline outline-1 pt-1 px-2 py-1 hover:shadow-md transition-shadow' onClick={()=>setFormKriteria(formkriteria - 1)}>Close</p>
                        </div>
                        <div className="col-span-4">
                        <h1 className='ml-4 font-bold text-2xl mt-2 text-center'>Tambah Kriteria Form</h1>
                        </div>
                        </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center">

                        <div className="p-6 bg-white border-b border-gray-200">
                                    <label htmlFor="" className='mt-3'>Kode :</label>
                                    <input autoFocus type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setkodeKriteria(e.target.value)} value={kodeKriteria} required/>
                                    
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                                    <label htmlFor="" className='mt-3'>Nama  :</label>
                                    <input type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setNamaKriteria(e.target.value)} value={namakriteria} required/>
                                    
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <label htmlFor="" className='mt-3'>Jenis :</label>
                            <select className='rounded ml-4 border-radius-8px shadow-md required:text'  onChange={(e) => setJenis(e.currentTarget.value)}>
                                <option>--Pilih--</option>
                                <option value="Cost">Cost</option>
                                <option value="Benefit">Benefit</option>
                            </select>
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                                        <label htmlFor="" className='mt-3'>Bobot :</label>
                                        <input type="number" className='rounded ml-4 border-radius-8px shadow-md required:text' onChange={(e)=> setBobot(e.target.value)} value={bobot} required/>
                        </div>
                        </div>
                        <div className="flex justify-center mt-2 mb-2 col-span-3">
                                <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-md text-center  border-collapse hover:bg-[#25e157]' type='submit'><span className='font-bold text-white font-style: italic text-sm hover:text-base; '>Submit</span></button>
                        </div>
                    </form>
                    
                </div>
        )
    }
    
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kriteria</h2>}
        >
            <Head title="Kriteria" />

            {props.flash.success !==null && 
                
                <div className="max-w-4xl mx-auto mt-4 alert shadow-lg" id="notifnih">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                    <h3 className="font-bold">{props.flash.success}</h3>
                    <div className="text-xs">Pemberitahuan !!</div>
                    </div>
                </div>
                <div className="flex-none">
                <button className="btn btn-sm bg-red-600 border-none hover:bg-red-500" onClick={() => { document.getElementById('notifnih').style.visibility = "hidden" } }>X</button>
                </div>
            </div>
            }

            <div className="py-8" id='dataKriteria'>
            {formkriteria %2 == 0 ? tambahKriteria() : defaultnya()}
                
            </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className='font-bold text-2xl text-center py-4'>Data Kriteria</h2>
                    {props.kriteria.length < 1 ?                        
                        <div className="flex justify-center p-6 bg-white border-b border-gray-200">
                                Belum ada Data Pemain
                            
                        </div> 
                    : <TableKriteria judul={[ 'Kode', 'Kriteria', 'Jenis', 'Bobot', 'Action']} kriteria={props.dataKriteria}/>
                        
                    }
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8" id='dataKriteriaPemain'>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <h2 className='font-bold text-2xl text-center py-4'>Pemain Kriteria</h2>
                    {props.kriteriaPemain.length < 1 ?                        
                        <div className="flex justify-center p-6 bg-white border-b border-gray-200">
                                Belum ada Data Pemain
                            
                        </div> 
                    : <TableKriteriaPemain  data={props.kriteriaPemain} alternatif={props.alternatif} kriteria={props.kriteria}/>
                        
                    }
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <h2 className='font-bold text-2xl text-center py-4'>Perbandingan Berpasangan Kriteria</h2>
                    {props.perbandingan.length < 1 ?                        
                        <div className="flex justify-center p-6 bg-white border-b border-gray-200">
                                Belum ada Data
                        </div> 
                    : <TablePerbandinganBerpasangan kriteria={props.kriteria} perbandingan={props.perbandingan} jumlahperb={props.jumlahperb}/>                        
                    }
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <h2 className='font-bold text-2xl text-center py-4'>Matriks Nilai Normalisasi Kriteria</h2>
                    {props.perbandingan.length < 1 ?                        
                        <div className="flex justify-center p-6 bg-white border-b border-gray-200">
                                Belum ada Data
                        </div> 
                    :   <TableNormalisasiKriteria kriteria={props.kriteria} perbandingan={props.perbandingan} jumlahperb={props.jumlahperb} />                    
                    }
                    </div>
                </div>
        </Authenticated>
    );
}
