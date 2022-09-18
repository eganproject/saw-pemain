import React from 'react';


const TablePembobotan2 = ({kriteria, alternatif, kriteriaPemain, min, max, simpul}) =>{
    const hasilRanks = [];
    const kesimpulannya = []
    
    
 
    
    return(
        <>
        
        <div className="overflow-x-auto px-3 py-4"  id="sembunyiin" hidden>
            <table className="table w-full border-collapse border" >
                <tbody>
                <tr>
                    <th rowSpan="2" className='text-center border border-slate-500 bg-slate-200'>Pemain</th>
                    <th colSpan={kriteria.length} className='text-center border border-slate-500 bg-slate-200'>Kriteria</th>
                    <th rowSpan="2" className='text-center border border-slate-500 bg-slate-200'>Hasil</th>
                </tr>
                
                <tr>
                    {kriteria.map((data, i) => {
                        return(
                            <th key={i} className='text-center border border-slate-500 bg-slate-200'>{data.kode}</th>
                        )
                    })}
                </tr>
                {alternatif.map((alt, i) => {
                    
                    let hasilNormalisasi = 0;

                    return(
                        <tr key={(i)}>
                            <th className='text-center border border-slate-500 bg-slate-200'>{alt.kode}</th>
                            {
                                kriteriaPemain.filter(nilai => nilai.id_alternatif == alt.id).map((data,i)=> {
                                    if(data.kriteria.jenis == ['Cost']){
                                       return min.filter(min => min.id_kriteria == data.id_kriteria).map((dataMin, i) =>{
                                            let n = dataMin.min / data.nilai;
                                            let hasil = n.toFixed(2);
                                            let nx = hasil * data.kriteria.bobot;
                                            let hasilKali = nx.toFixed(2);
                                            hasilNormalisasi += (+hasilKali);
                                            kesimpulannya.push({...kesimpulannya, ['alt'] : alt.id, ['nilai'] : hasilKali })
                                         
                                            return(<td key={i} className='text-center border border-slate-500'>{hasilKali}</td>)
                                    })
                                }else if(data.kriteria.jenis == ['Benefit']){
                                    return max.filter(max => max.id_kriteria == data.id_kriteria).map((dataMax, i) =>{
                                        let n =  data.nilai / dataMax.max ;
                                        let hasil = n.toFixed(2);
                                        let nx = hasil * data.kriteria.bobot;
                                        let hasilKali = nx.toFixed(2);
                                        hasilNormalisasi += (+hasilKali);
                                        kesimpulannya.push({...kesimpulannya, ['alt'] : alt.id, ['nilai'] : hasilKali })

                                        return(<td key={i} className='text-center border border-slate-500'>{hasilKali}</td>)
                                })
                                }    
                                })
                            }
                            
                            <td className='text-center border border-slate-500 bg-slate-200'>
                                <input type="hidden" name={ hasilRanks.push({nama: alt.nama_alternatif, nilai: hasilNormalisasi.toFixed(2)}) } />

                                
                                {hasilNormalisasi.toFixed(2)}
                                
                            </td>
                        </tr>    
                    )
                    
                    
                })}

        
                 </tbody>
            </table>
        </div>
<hr className='mt-8 drop-shadow-md' />
    <div className="flex justify-center p-6">
                <h2 className='font-bold text-xl'>Ranking</h2>
    </div>
    <div className="px-6 flex justify-center" id="ranking">
        <div className="overflow-x-auto w-1/2">
            <table className="table w-full border-collapse border" >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody>
        {hasilRanks.sort((a, b) => parseFloat(b.nilai) - parseFloat(a.nilai)).map((data,i) => {
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{data.nama}</td>
                    <td>{data.nilai}</td>
                </tr>
            )
            
        })}
                </tbody>

            </table>
        </div>
    </div>
    <hr className='mt-8 drop-shadow-md' />
    <div className="flex justify-center p-6">
                <h2 className='font-bold text-xl'>Kesimpulan</h2>
    </div>
    <div className="px-6 flex justify-center" id="ranking">
        <div className="overflow-x-auto w-full">
           <table className="table w-full border-collapse border" >

            <thead>

                <tr>
                    <th rowSpan={'2'} className='text-center'>Pemain</th>
                    <th colSpan={kriteria.length} className='text-center'>Kriteria</th>
                    <th rowSpan={'2'} className='text-center'>Kesimpulan</th>
                </tr>

                <tr>
                    {kriteria.map((data, i) => {
                        return(
                            <th key={i}>{data.kode}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    alternatif.map((alt, i) => {
                        return(
                            <tr key={i}>
                                <th>{alt.kode}</th>
                            {
                                kesimpulannya.filter(kesimpulannya => kesimpulannya.alt == alt.id).map((data, i) => {
                                    return(
                                        <th key={i}>{data.nilai}</th>
                                    )
                                })
                            }
                            <td>
                            {
                                simpul.filter(simpul=> simpul[0] == alt.nama_alternatif).map((data, i) => {
                                    return( 
                                    <p key={i}>{data[1] ? data[0]+' berpotensi menjadi '+[data[1]] : data[0]+ ' tidak memilik potensi' }{data[2] && ' dan berpotensi menjadi '+[data[2]]}{data[3] && ' dan berpotensi menjadi '+[data[3]]}{data[4] && ' dan berpotensi menjadi '+[data[4]]}</p>
                                    )
                                })
                            }
                            </td>
                            </tr>
                        )
                    })
                }
                    


            </tbody>
           </table>
        </div>
    </div>

    

</>
    )
}

export default TablePembobotan2;