import { Link } from '@inertiajs/inertia-react';
import React from 'react';


const TableKriteriaPemain = ({data, alternatif, kriteria}) =>{
//    console.log(data)
    return(
        <>
        
        <div className="overflow-x-auto px-3 py-4">
        <table className="table w-full border-collapse border" >
            <tbody>

        <tr>
           <th rowSpan={2} className="items-center text-center border border-slate-500 bg-slate-300">Pemain</th>
        
        
           <th colSpan={kriteria.length} className="text-center border border-slate-500 bg-slate-300">Keterangan</th>
        <th rowSpan={2} className="items-center text-center border border-slate-500 bg-slate-300">Action</th>
        </tr>
        <tr>
            {
                kriteria.map((kriteria, i)=>{
                    return(<th key={i} className="text-center border border-slate-500 bg-slate-300">{kriteria.kode}</th>)
                })
            }
        </tr>
        {
            alternatif.map((alternatif, i) => {
                
                return(
                    <tr key={i}>
                        <td className="text-center border border-slate-500 bg-slate-200">{alternatif.kode}</td>
                        {
                            data.filter(nilai => nilai.id_alternatif == alternatif.id).map((filteredNilai, i )=> (
                                <td className="text-center border border-slate-500" key={i}>{filteredNilai.nilai}</td>
                            ))
                        }
                        <td className="text-center border border-slate-500">
                            <Link href={route('kriteria.editkriteriapemain')} method="get" data={{ id: alternatif.id }} className="rounded px-1 py-1 text-white bg-emerald-500 hover:rounded-lg hover:cursor-pointer">
                            Edit
                            </Link>

                        </td>
                    </tr>
                    
                )
            }) 
        }
        
        </tbody>
       </table>
    </div>
</>
    )
}

export default TableKriteriaPemain;