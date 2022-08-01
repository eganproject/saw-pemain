import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Home" />
                <div className="top-0 py-4 px-8 grid grid-cols-2 gap-2 justify-center items-center">
                        <div className="flex ml-6">
                        <h2 className='font-bold text-xl'>SPK Penentuan Pemain Sepak Bola</h2>
                        </div>
                        <div className="flex justify-end">
                            {props.auth.user ? (
                                <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="text-sm text-gray-700 underline">
                                        Log in
                                    </Link>

                                    <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                
            </div>
        </>
    );
}
