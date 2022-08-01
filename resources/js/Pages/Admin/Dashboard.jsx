import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">SPK</h1>
                                    <h2 className="py-2 font-bold text-3xl">Penentuan Posisi Pemain</h2>
                                    <h2 className="py-2 mb-6 font-bold text-3xl">Sepak Bola</h2>
                                    <Link href={route('alternatif')} className="btn btn-primary mr-2">Page Pemain</Link>
                                    <Link href={route('kriteria')} className="btn btn-primary mr-2">Page Kriteria</Link>
                                    <div>
                                    <Link href={route('penilaian')} className="btn btn-primary mt-2">Page Perhitungan</Link>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
