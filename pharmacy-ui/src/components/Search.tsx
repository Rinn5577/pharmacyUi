import React, { useState } from "react";
import { useAppDispatch} from "../hooks/redux-hooks";
import { fetchPharmacy } from "../store/pharmacy-actions";
import { setViewAll } from "../store/utils-actions";

const Search=()=>{

    const [pharmacy_id,setPharmacy_id]=useState(1);
    const dispatch=useAppDispatch();

    const searchHandler=()=>{
        dispatch(fetchPharmacy(pharmacy_id))
        dispatch(setViewAll(false))
    }

    return(
        <div>
            <div className="max-w-fit relative">
                <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Search by ID
                </label>
            </div>
            <div className="max-w-fit inline">
                <div className="flex flex-wrap justify-between -mx-3 mb-2">
                    <div className=" max-w-fit md:w-1/3 px-3 mb-6 md:mb-0">
                    <input onChange={(event)=>setPharmacy_id(parseInt(event.target.value))} className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <button onClick={searchHandler} className=" hover:bg-nuvemBlue bg-nuvemGreen hover:text-nuvemGreen text-nuvemBlue text-center py-2 px-4 rounded-full">
                            Search
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;