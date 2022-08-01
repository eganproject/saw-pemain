import { DeleteAPI, EditAPI } from '@/Services/API';
import React, { useState } from 'react';
import Paginator from './Paginator';

const TablePemain = ({judul, pemain}) =>{
    const[tampilEdit, setTampilEdit] = useState(1);
    const [kodepemainedit, setKodePemainEdit] = useState("");
    const [namapemainedit, setNamaPemainEdit] = useState("");
    const [keteranganedit, setKeteranganEdit] = useState("");
    const [idedit, setIdEdit] = useState("");
// console.log(pemain)
    const Edit = (detail) => {
        console.log(detail)
        setTampilEdit(tampilEdit+1);
        setIdEdit(detail.data.id);
        setKodePemainEdit(detail.data.kode);
        setNamaPemainEdit(detail.data.nama_alternatif);
        setKeteranganEdit(detail.data.keterangan)
    }
    const handleEdit = () => {
        const data = {
            id: idedit,
            kode: kodepemainedit,
            nama_alternatif: namapemainedit,
            keterangan: keteranganedit
        }
        EditAPI('/alternatif/update', data);
    }
    return(
        <>
        {
            tampilEdit %2 == 0 &&  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-2 ">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-3 gap-4">
                <div></div>
                <div className="">
                <h1 className='text-center font-bold text-2xl mt-2'>Edit Pemain Form</h1>
                </div>
                <div className='place-self-end mr-4 mt-2'>
                    <p className='text-md hover:cursor-pointer hover:text-lg  rounded-full border-radius-8px outline outline-1 pt-1 px-2 py-1' onClick={()=>setTampilEdit(tampilEdit - 1)}>X</p>
                </div>
                <div className="p-6 bg-white border-b border-gray-200 col-span-3 ">
                    <div className='flex justify-center'>

                        <label htmlFor="" className='mt-3'>Kode Pemain :</label>
                        <input autoFocus type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setKodePemainEdit(e.target.value)} value={kodepemainedit}/>
                        <label htmlFor="" className='mt-3 ml-4'>Nama Pemain :</label>
                        <input type="text" className='rounded ml-4 border-radius-8px shadow-md' onChange={(e)=> setNamaPemainEdit(e.target.value)} value={namapemainedit}/>
                        <label htmlFor="" className='mt-3 ml-4'>Keterangan :</label>
                        <input type="text" className='rounded ml-4 border-radius-8px shadow-md required:text' onChange={(e)=> setKeteranganEdit(e.target.value)} value={keteranganedit}/>
                    </div>
                <div className="flex justify-center mt-4">
                        <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-md text-center  border-collapse hover:bg-[#25e157]' onClick={() =>handleEdit()}><span className='font-bold text-white font-style: italic text-sm hover:text-base; '>Submit</span></button>
                </div>
                </div>
            </div>
        </div>
        }
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
        <tr>
            {
                judul.map((data, i) => {
                    return(
                        <th key={i}>{data}</th>
                        )
                    })
                }
        </tr>
        </thead>
        <tbody>
            {
                pemain.data.map((data, i)=> {
                    return(
        <tr key={i}>
            <td>{data.kode}</td>
            <td>{data.nama_alternatif}</td>
            <td>{data.keterangan}</td>
            <td><button className='shadow-md rounded-md bg-[#04eedb] px-1 py-1 text-sm italic text-white hover:rounded-full transition-all' onClick={() => 
                Edit({data})}>Edit</button>
            <button className='ml-2 shadow-md rounded-md bg-[#ee5a04] px-1 py-1 text-sm italic text-white hover:rounded-full transition-all' onClick={() => DeleteAPI('/alternatif/delete', data.id)}>Delete</button></td>
                
        </tr>

            )
                })
            }
        
        </tbody>
       </table>
       <div className="py-4 mt-4 flex justify-center">
           
            <Paginator paginate={pemain.links} />
       </div>
       
    </div>
</>
    )
}

export default TablePemain;