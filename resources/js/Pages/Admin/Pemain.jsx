import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import TablePemain from '@/Components/TablePemain';
import { PostAPI } from '@/Services/API';

export default function Pemain(props) {
    // console.log(props);
    const [formPemain, setFormPemain] = useState(1);
    const [kodepemain, setKodePemain] = useState("");
    const [namapemain, setNamaPemain] = useState("");
    const [keterangan, setKeterangan] = useState("");

    const handleSubmit = () => {
        const data = {
            kodepemain,
            namapemain,
            keterangan
        }
        PostAPI('/alternatif', data);
        setKodePemain('')
        setNamaPemain('');
        setKeterangan('')
    }

    const defaultnya = () => {
        return(
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-end">
                            <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-full text-center text-block border-collapse outline-4px hover:bg-[#25e157]'><span className='font-bold text-white font-style: italic text-sm hover:text-base; ' onClick={() => setFormPemain(formPemain + 1)}>Tambah Pemain</span></button>
                        </div>
                    )
                }
    const tambahPemain = () => {
        return(
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-2 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-3 gap-4">
                        <div></div>
                        <div className="">
                        <h1 className='text-center font-bold text-2xl mt-2'>Tambah Pemain Form</h1>
                        </div>
                        <div className='place-self-end mr-4 mt-2'>
                            <p className='text-md hover:cursor-pointer hover:text-lg  rounded-full border-radius-8px outline outline-1 pt-1 px-2 py-1' onClick={()=>setFormPemain(formPemain - 1)}>X</p>
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200 col-span-3 ">
                            <div className='flex justify-center'>

                                <label htmlFor="" className='mt-3'>Kode</label>
                                <input autoFocus type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setKodePemain(e.target.value)} value={kodepemain}/>
                                <label htmlFor="" className='mt-3 ml-4'>Nama Pemain :</label>
                                <input type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setNamaPemain(e.target.value)} value={namapemain}/>
                                <label htmlFor="" className='mt-3 ml-4'>Keterangan :</label>
                                <input type="text" className='rounded ml-4 border-radius-8px shadow-md required:text' onChange={(e)=> setKeterangan(e.target.value)} value={keterangan}/>
                            </div>
                        <div className="flex justify-center mt-4">
                                <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-md text-center  border-collapse hover:bg-[#25e157]' onClick={() =>handleSubmit()}><span className='font-bold text-white font-style: italic text-sm hover:text-base; '>Submit</span></button>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
    
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pemain</h2>}
        >
            <Head title="Pemain" />

            

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

            <div className='mt-4' id='ppp'>
            {formPemain %2 == 0 ? tambahPemain() : defaultnya()}
                
            </div>
            <div className='py-12'>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <h2 className='font-bold text-2xl text-center py-4'>Data Pemain</h2>
                    {props.alternatif.length < 1 ?                        
                            <div className="flex justify-center p-6 bg-white border-b border-gray-200">
                                    Belum ada Data Pemain
                            </div> 
                        : <div className="px-4 py-4"> <TablePemain judul={['Kode', 'Pemain', 'Keterangan', 'Action']} pemain={props.alternatif}/></div>
                            
                        }
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
