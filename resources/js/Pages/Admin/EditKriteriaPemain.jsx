import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import useForm from '@/Services/Utils/useForm';
import { PostAPI } from '@/Services/API';

export default function EditKriteriaPemain(props) {
    
    const handleEdit=()=>{
      PostAPI('/kriteria/updatekriteriapemain', values);
    }
    const [values, handleChange] = useForm();

   
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Kriteria Pemain</h2>}
        >
            <Head title="Edit Kriteria Pemain" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Link href={route('kriteria')} className="btn bg-purple-400 text-white mb-2 border-collapse border-[#fff] shadow-lg">Kembali</Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className='text-center py-4 text-2xl bg-slate-300 font-bold'>{props.nama_alternatif}</h2>
                        <div className="p-6 bg-white border-b border-gray-200">

                            {props.kriteriaPemain.map((data,i) => {
                                return(
                                    <div className="relative z-0 mb-6 w-full group" key={i}>
                                    <input id="floating_email" type="number" name={data.id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={handleChange} defaultValue={data.nilai} required />
                                    
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{data.kriteria.nama_kriteria}</label>
                                 </div>
                                )
                            })}
                            <div className="justify-end flex">
                            <button className="btn bg-[#285dee] text-white mb-2 border-collapse border-[#fff] shadow-lg hover:bg-[#4777fc]" onClick={()=>handleEdit()}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
