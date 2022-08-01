import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <svg role="img" className='animate-spin' width="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ActiGraph</title><path d="M12.043 0c.413 0 .83.266 1.054.546.224.28.191.342.21.529.018.187.16.265.16.62s-.16.494-.272.644c-.112.15-.047.2-.14.406-.094.206-.118.168-.193.336-.075.168.123.462.319.61.196.147.378.262.938.318.56.056.683.03.963.05.28.018.453.174.882.23.43.056.449 0 .803 0 .355 0 .462.053.78.053.317 0 .75-.14 1.141-.122.393.018 1.43.115 1.86.115.43 0 .931-.442 1.38-.423.448.018.832.119.85.455.019.336-.165.762-.37.837-.206.074-.609-.067-.852-.067-.242 0-.496.03-.606.025-.133-.007-.232-.09-.381-.053-.15.038-.76.297-.984.315-.224.02-.689-.034-.875.003-.187.038-.822.15-1.083.168-.262.02-.786-.02-1.029.018-.243.037-.615.113-.839.113-.224 0-.702-.172-.866-.054-.397.288-.336.683-.532 1.247-.187.538-.488.88-.525 1.29-.038.412.224 1.738.355 2.205.13.467.504 1.083.747 1.848.242.766.58 2.31.711 2.945.131.635.004.62.11.977.108.362.616.934.878 1.83.261.896.547 2.744.64 3.23.094.485.135.558.172.707.037.15-.045.214.039.35.378.613.848.849.792 1.222-.056.374-.652.513-1.083.448-.326-.048-.523-.672-.597-.859-.075-.186.003-.239-.072-.37-.075-.13-.089-.199-.126-.535-.037-.336.016-.36-.039-.582-.294-1.197-1.144-2.367-1.35-3.07-.117-.393-.049-.444-.124-.799-.074-.355-2.402-5.42-2.883-5.42-.496 0-2.783 5.006-2.877 5.323-.093.318-.04.638-.133.899s-1.208 2.388-1.36 3.042c-.1.428-.012.556-.068.8-.056.242-.266 1.303-.659 1.509-.392.205-1.086.046-1.178-.292-.142-.52.678-.906.765-1.382.076-.41.804-4.165 1.102-4.893.299-.728.486-.654.616-1.064.042-.13.043-.514.113-.945.153-.934.433-2.294.765-3.201.486-1.326 1.157-2.611 1.032-3.893-.053-.539-.23-.606-.417-1.222-.187-.616-.428-1.347-.67-1.384-.244-.037-.449.093-.748.093s-.896-.13-1.12-.13c-.224 0-.992-.05-1.31-.05-.318 0-.54-.081-.726-.063-.187.02-.36.007-.584.007-.28 0-1.017-.34-1.204-.34-.187 0-.245.036-.413.036-.168 0-.325-.063-.512-.063-.186 0-.532.108-.71.108-.186 0-.54-.419-.484-.886.056-.466.805-.42.991-.42.263 0 .889.355 1.131.392.243.038 1.538-.101 1.818-.101s1.08.126 1.509.126c.43 0 1.014.01 1.369-.046s.68-.244.903-.262c.224-.019 1.238.091 1.807-.306.375-.261.411-.486.392-.654-.018-.168-.14-.192-.234-.36-.094-.168-.053-.305-.109-.417-.056-.112-.269-.212-.273-.623-.004-.322.035-.278.147-.596.112-.317.116-.451.378-.707.19-.184.575-.371.988-.371"/></svg>
            {/* <svg role="img" viewBox="0 0 24 24" className='animate-spin' width="100" xmlns="http://www.w3.org/2000/svg"><title>foodpanda</title><path d="M4.224 0a3.14 3.14 0 00-3.14 3.127 3.1 3.1 0 001.079 2.36 11.811 11.811 0 00-2.037 6.639C.126 18.68 5.458 24 12 24c6.542 0 11.874-5.32 11.874-11.874a11.69 11.69 0 00-2.025-6.614 3.136 3.136 0 001.09-2.373A3.132 3.132 0 0019.8.012a3.118 3.118 0 00-2.636 1.438A11.792 11.792 0 0012.012.264c-1.845 0-3.595.419-5.152 1.174A3.133 3.133 0 004.224 0zM12 1.198c1.713 0 3.331.396 4.78 1.102a10.995 10.995 0 014.29 3.715 10.89 10.89 0 011.882 6.135c.011 6.039-4.901 10.951-10.94 10.951-6.04 0-10.951-4.912-10.951-10.951 0-2.277.694-4.386 1.88-6.135A11.08 11.08 0 017.232 2.3 10.773 10.773 0 0112 1.198zM7.367 6.345c-.853.012-1.743.292-2.28.653-1.031.682-2.29 2.156-2.085 4.181.191 2.025 1.785 3.283 2.612 3.283.826 0 1.234-.42 1.485-1.45.252-1.018 1.115-2.192 2.217-3.45s-.024-2.469-.024-2.469c-.393-.513-1.052-.727-1.755-.747a3.952 3.952 0 00-.17-.001zm9.233.007l-.17.001c-.702.02-1.358.233-1.746.752 0 0-1.126 1.21-.024 2.469 1.114 1.258 1.965 2.432 2.217 3.45.251 1.019.659 1.438 1.485 1.45.827 0 2.409-1.258 2.612-3.283.204-2.025-1.054-3.51-2.084-4.182-.544-.36-1.437-.643-2.29-.657zm-8.962 2c.348 0 .624.275.624.623-.012.335-.288.623-.624.623a.619.619 0 01-.623-.623c0-.348.276-.624.623-.624zm8.891 0c.348 0 .623.275.623.623-.012.335-.287.623-.623.623a.619.619 0 01-.623-.623c0-.348.288-.624.623-.624zm-4.541 4.025c-.527 0-2.06.096-2.06.587 0 .887 1.88 1.522 2.06 1.474.18.048 2.06-.587 2.06-1.474 0-.49-1.52-.587-2.06-.587zM9.076 15.17c0 1.414 1.294 2.564 2.912 2.564 1.618 0 2.924-1.15 2.924-2.564z"/></svg> */}
            <p className='mt-2 font-bold text-xl'>Halaman Login</p>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}