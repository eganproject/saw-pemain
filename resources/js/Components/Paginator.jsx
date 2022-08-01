import { Link } from "@inertiajs/inertia-react";
import React from "react";
export default function Paginator({paginate}){
return(
    <>
    {paginate.map((paginate,i)=>{
        return(
            
            <div key={i}>
                {
                    paginate.url &&
                    
                    <Link href={paginate.url} className={paginate.active ? "px-2 py-2 text-md bg-purple-500 text-white font-bold rounded border border-collapse": "px-2 py-2 text-sm bg-purple-300 text-white font-bold rounded border border-collapse"}>{paginate.label}</Link>
                }
                    </div>
                )
            })
        }
        </>
        )}
