import { PostAPI } from '@/Services/API'
import React, { useState } from 'react'

const TableNormalisasiKriteria = ({kriteria, perbandingan, jumlahperb}) => {

    const [bobotnya, setBobotnya] = useState({
        id : '',
        nilai : ''
    })

    const bobotHasil = (nilai) => {
        let xy = nilai / kriteria.length 
       
        return xy.toFixed(2);
    }

    const handleUbah = () => {
        let data = []
        kriteria.map(kt => {
           data.push({'id' : kt.id, 'bobot' : document.getElementById(kt.id).value})
        })

        PostAPI('/kriteria/updateBobot', data)
        
        // console.log('bobot', data);
    }


  return (
    <div className="overflow-x-auto px-3 py-4" >
            <table className="table w-full border-collapse border" >
                <tbody>
                <tr>
                    <th className='text-center border border-slate-500 bg-slate-200'>Kriteria</th>
                    {
                kriteria.map((data,i) =>{
                return(
                    <th className='text-center border border-slate-500 bg-slate-200' key={i}>{data.kode}</th>
                )
                })
                }
                <th className='text-center border border-slate-500 bg-slate-200'>Bobot</th>
                </tr>
                
               {
                kriteria.map((data,i) =>{
                    let perb = perbandingan.sort((a,b) => {
                        return a.id_kriteria2 - b.id_kriteria2;
                    });
                    let bobot =0;
                    let hasil = 0;
                return(
                <tr key={i}>
                    <th className='text-center border border-slate-500 bg-slate-200'>{data.kode}</th>
                    { 
                    perb.filter(perbandingan => perbandingan.id_kriteria1 == data.id).map((perbandingan, i)=> {
                        let  x = jumlahperb.filter(jumlah => jumlah.id == perbandingan.id_kriteria2).map((jmlh) => {
                            let y = perbandingan.nilai / jmlh.jumlah
                           return y.toFixed(2)
                        })

                        bobot += (+x);
                        return(
                            <th className='text-center border border-slate-500' key={i}>{x}</th>
                            )
                    })}
                    <th className='text-center border border-gray-400 bg-slate-100'>
                        {bobotHasil(bobot)}
                        <input type="hidden" id={data.id} value={bobotHasil(bobot)} />
                    </th>
                </tr>
                )
                })
                }
              

                
                 </tbody>
            </table>
                    <div className="flex justify-end py-4 mr-4">
                        <button className='btn bg-red-600 border border-white hover:bg-red-700 hover:border-red-600 shadow-lg' onClick={handleUbah}>Update Bobot</button>
                     </div>
        </div>

  )
}

export default TableNormalisasiKriteria