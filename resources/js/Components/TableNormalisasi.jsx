import { Link } from '@inertiajs/inertia-react';
import React from 'react';


const TableNormalisasiMatriks = ({kriteria, alternatif, kriteriaPemain, min, max}) =>{
//    console.log(min)
    return(
        <>
        
        <div className="overflow-x-auto px-3 py-4">
            <table className="table w-full border-collapse border" >
                <tbody>
                <tr>
                    <th rowSpan="2" className='text-center border border-slate-500 bg-slate-200'>Pemain</th>
                    <th colSpan={kriteria.length} className='text-center border border-slate-500 bg-slate-200'>Kriteria</th>
                </tr>
                
                <tr>
                    {kriteria.map((data, i) => {
                        return(
                            <th key={i} className='text-center border border-slate-500 bg-slate-200'>{data.kode}</th>
                        )
                    })}
                </tr>
                {alternatif.map((alt, i) => {
                   
                    return(
                        <tr key={(i)}>
                            <th className='text-center border border-slate-500 bg-slate-200'>{alt.kode}</th>
                            {
                                kriteriaPemain.filter(nilai => nilai.id_alternatif == alt.id).map((data, i)=> {
                                    if(data.kriteria.jenis == ['Cost']){
                                       return min.filter(min => min.id_kriteria == data.id_kriteria).map((dataMin, i) =>{
                                            let n = dataMin.min / data.nilai;
                                            let hasil = n.toFixed(2);
                                            let hasilKali = hasil * data.kriteria.bobot;
                                            let hasilNormalisasi = hasilKali;
                                            return(<td key={i} className='text-center border border-slate-500'>{hasil}</td>)
                                    })
                                }else if(data.kriteria.jenis == ['Benefit']){
                                    return max.filter(max => max.id_kriteria == data.id_kriteria).map((dataMax, i) =>{
                                        let n =  data.nilai / dataMax.max ;
                                        let hasil = n.toFixed(2);
                                        let hasilKali = hasil * data.kriteria.bobot;
                                        let hasilNormalisasi = hasilKali;
                                        return(<td key={i} className='text-center border border-slate-500'>{hasil}</td>)
                                })
                                }    
                                })
                            }
                        </tr>    

                    )
                })}

        
                 </tbody>
            </table>
        </div>
</>
    )
}

export default TableNormalisasiMatriks;