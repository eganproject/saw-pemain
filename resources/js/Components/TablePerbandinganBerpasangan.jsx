import { PostAPI } from '@/Services/API'
import React, { useState } from 'react'

const TablePerbandinganBerpasangan = ({kriteria, perbandingan, jumlahperb }) => {
    // console.log(perbandingan);
const [input, setInput] = useState({
id_kriteria1 : '',
nilai : 1,
id_kriteria2 : ''
})

    const handleChange = (e) => {
    e.persist()
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        PostAPI('/kriteria/ubahPerbandingan', input);
    }
    return (
        <>
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                <select name="id_kriteria1"  className='shadow mr-4 bg-gray-100 focus:outline-none focus:bg-white leading-tight block appereance-none rounded-lg' onChange={handleChange}>
                    <option value="">Pilih Kategori</option>
                    {
                        kriteria.map((data,i)=>{
                            return(
                                <option value={data.id} key={i}>{data.kode + ' : ' + data.nama_kriteria}</option>    
                            )
                        })
                    }
                </select>   
                             
                <select name="nilai" className='shadow mr-4 border border-red-500 bg-red-100 focus:outline-none focus:bg-white leading-tight block appereance-none rounded-lg' onChange={handleChange}>
                                <option value="1">1 : Sama penting dengan</option>    
                                <option value="2">2 : Mendekati sedikit lebih penting dari</option>    
                                <option value="3">3 : Sedikit lebih penting dari</option>    
                                <option value="4">4 : Mendekati lebih penting dari</option>    
                                <option value="5">5 : Lebih penting dari</option>    
                                <option value="6">6 : Mendekati sangat penting dari</option>    
                                <option value="7">7 : Sangat penting dari</option>    
                                <option value="8">8 : Mendekati mutlak dari</option>    
                                <option value="9">9 : Mutlak penting dari</option>    
                </select>    

                <select name="id_kriteria2"  className='shadow mr-4 bg-gray-100 focus:outline-none focus:bg-white leading-tight block appereance-none rounded-lg' onChange={handleChange}>
                <option value="">Pilih Kategori</option>
                    {
                        kriteria.map((data,i)=>{
                            return(
                                <option value={data.id} key={i}>{data.kode + ' : ' + data.nama_kriteria}</option>    
                            )
                        })
                    }
                </select>             
                </div>
                <div className="flex justify-center mt-4">
                    <button type='submit' className='btn bg-blue-500 shadow-md hover:bg-blue-700'>Ubah</button>
                </div>
            </form>
        </div>
    <div>

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
                </tr>
                
               {
                kriteria.map((data,i) =>{
                    let perb = perbandingan.sort((a,b) => {
                        return a.id_kriteria2 - b.id_kriteria2;
                    });
                return(
                <tr key={i}>
                    <th className='text-center border border-slate-500 bg-slate-200'>{data.kode}</th>
                    { 
                    perb.filter(perbandingan => perbandingan.id_kriteria1 == data.id).map((perbandingan, i)=> {
                        return(
                            <th className='text-center border border-slate-500' key={i}>{perbandingan.nilai}</th>
                            )
                    })}
                </tr>
                )
                })
                }
                <tr>
                    <th className='text-center border border-slate-500 bg-yellow-200'>Jumlah</th>
                    {
                    jumlahperb.map((jmlh, i)=>{
                        return(
                            <th key={i} className='text-center bg-yellow-200 border border-slate-400'>{jmlh.jumlah}</th>
                        )
                    })
                    }
                </tr>
                   
                
                   

        
                 </tbody>
            </table>
        </div>

    </div>
    </>
  )
}

export default TablePerbandinganBerpasangan