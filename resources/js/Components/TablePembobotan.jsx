import React from 'react';


const TablePembobotan = ({kriteria, alternatif, kriteriaPemain, min, max}) =>{
    const hasilRanks = [];

    //Comparing based on the property qty
function compare_qty(a, b){
    // a should come before b in the sorted order
    if(a.qty < b.qty){
            return -1;
    // a should come after b in the sorted order
    }else if(a.qty > b.qty){
            return 1;
    // a and b are the same
    }else{
            return 0;
    }
}
    console.log()
    
    return(
        <>
        
        <div className="overflow-x-auto px-3 py-4" >
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
                                kriteriaPemain.filter(nilai => nilai.id_alternatif == alt.id).map((data, i)=> {
                                    if(data.kriteria.jenis == ['Cost']){
                                       return min.filter(min => min.id_kriteria == data.id_kriteria).map((dataMin, i) =>{
                                            let n = dataMin.min / data.nilai;
                                            let hasil = n.toFixed(2);
                                            let nx = hasil * data.kriteria.bobot;
                                            let hasilKali = nx.toFixed(2);
                                            hasilNormalisasi += (+hasilKali);
                                         
                                            return(<td key={i} className='text-center border border-slate-500'>{hasilKali}</td>)
                                    })
                                }else if(data.kriteria.jenis == ['Benefit']){
                                    return max.filter(max => max.id_kriteria == data.id_kriteria).map((dataMax, i) =>{
                                        let n =  data.nilai / dataMax.max ;
                                        let hasil = n.toFixed(2);
                                        let nx = hasil * data.kriteria.bobot;
                                        let hasilKali = nx.toFixed(2);
                                        hasilNormalisasi += (+hasilKali);
                                    
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
            <p>Dari hasil perhitungan yang dilakukan, didapatkan bahwa :</p>
            {hasilRanks.sort((a, b) => parseFloat(b.nilai) - parseFloat(a.nilai)).map((data,i) => {
            if(i < 2){
                return <p key={i}> <span className='font-bold'>{data.nama}</span> berpotensi menjadi <span className='font-bold'>Striker</span></p>
            }else if(i>2 < 5 ){
                return <p key={i}><span className='font-bold'>{data.nama}</span> berpotensi menjadi <span className='font-bold'>Gelandang / Sayap</span></p>
            }else if(i > 5 < 7){
                return <p key={i}><span className='font-bold'>{data.nama}</span> berpotensi menjadi <span className='font-bold'>Bek</span></p>
            }else if(i > 7 < 10){
                return <p key={i}><span className='font-bold'>{data.nama}</span> berpotensi menjadi <span className='font-bold'>Keeper</span></p>
            }
            
        })}
        </div>
    </div>

</>
    )
}

export default TablePembobotan;