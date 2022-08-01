import { DeleteAPI, EditAPI } from '@/Services/API';
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Paginator from './Paginator';

const TableKriteria = ({judul, kriteria}) =>{
    // console.log(kriteria)
    const[tampilEdit, setTampilEdit] = useState(1);
    const [kodekriteriaedit, setKodeKriteriaEdit] = useState("");
    const [namakriteriaedit, setNamaKriteriaEdit] = useState("");
    const [jenisedit, setJenisEdit] = useState("");
    const [bobotedit, setBobotEdit] = useState("");
    const [idedit, setIdEdit] = useState("");
    const Edit = (detail) => {
        setTampilEdit(tampilEdit+1);
        setIdEdit(detail.data.id);
        setKodeKriteriaEdit(detail.data.kode);
        setNamaKriteriaEdit(detail.data.nama_kriteria);
        setJenisEdit(detail.data.jenis);
        setBobotEdit(detail.data.bobot);
    }
    const handleEdit = () => {
        const data = {
            id: idedit,
            kode: kodekriteriaedit,
            nama_kriteria: namakriteriaedit,
           jenis: jenisedit,
           bobot: bobotedit
        }
        EditAPI('/kriteria/update', data);
    }
    return(
        <>
        {
            tampilEdit %2 == 0 &&  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-2 ">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-4 gap-4 items-center">
                <div></div>
                <div></div>
                <div></div>
                <div className='place-self-end mr-4 mt-2 '>
                    <hr className='mb-2' />
                    <p className='text-md hover:cursor-pointer hover:text-lg  rounded-full border-radius-8px outline outline-1 pt-1 px-2 py-1' onClick={()=>setTampilEdit(tampilEdit - 1)}>Close</p>
                </div>
                <div className="col-span-4">
                <h1 className='text-center font-bold text-2xl mt-2'>Edit Kriteria Form</h1>
                </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                                    <label htmlFor="" className='mr-2'>Keterangan :</label>
                                    <input autoFocus type="text" className='rounded border-radius-8px shadow-md' onChange={(e)=> setKodeKriteriaEdit(e.target.value)} value={kodekriteriaedit}/>
                                    
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                                    <label htmlFor="" className='mr-2'>Keterangan :</label>
                                    <input type="text" className='rounded border-radius-8px shadow-md' onChange={(e)=> setNamaKriteriaEdit(e.target.value)} value={namakriteriaedit}/>
                                    
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <label htmlFor="" className='mr-2'>Jenis :</label>
                            <select className='rounded border-radius-8px shadow-md required:text' defaultValue={jenisedit} onChange={(e) => setJenisEdit(e.currentTarget.value)}>
                                <option value="Const">Const</option>
                                <option value="Benefit">Benefit</option>
                            </select>
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                                        <label htmlFor="" className='mr-2'>Bobot :</label>
                                        <input type="text" className='rounded border-radius-8px shadow-md required:text' onChange={(e)=> setBobotEdit(e.target.value)} value={bobotedit} required/>
                        </div>
                        <div className="flex justify-center py-2 col-span-4">
                                <button className='drop-shadow-md border px-2 py-2 bg-[#20c06b] rounded-md text-center  border-collapse hover:bg-[#25e157]' onClick={() =>handleEdit()}><span className='font-bold text-white font-style: italic text-sm hover:text-base; '>Submit</span></button>
                        </div>
            </div>
        </div>
        }
        <div className="overflow-x-auto mx-8 px-3 py-4">
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
                kriteria.data.map((data, i)=> {
                    return(
        <tr key={i}>
            <td>{data.kode}</td>
            <td>{data.nama_kriteria}</td>
            <td>{data.jenis}</td>
            <td>{data.bobot}</td>
            <td><button className='shadow-md rounded-md bg-[#04eedb] px-1 py-1 text-sm italic text-white hover:rounded-full transition-all' onClick={() => 
                Edit({data})}>Edit</button>
            <button className='ml-2 shadow-md rounded-md bg-[#ee5a04] px-1 py-1 text-sm italic text-white hover:rounded-full transition-all' onClick={() => DeleteAPI('/kriteria/delete', data.id)}>Delete</button></td>
                
        </tr>

    )
                })
            }
        
        </tbody>
       </table>

        <div className="py-4 mt-2 flex justify-center">
            <Paginator paginate={kriteria.links}/>
        </div>
       
    </div>
</>
    )
}

export default TableKriteria;