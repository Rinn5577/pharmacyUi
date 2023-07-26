import React, { useState, useEffect } from "react";
import { useAppDispatch} from "../hooks/redux-hooks";
import { fetchPharmacy, fetchPharmacyByName } from "../store/pharmacy-actions";

const Search=()=>{
    const [input, setInput]=useState("");
    const [searchBy, setSearchBy]=useState("Id");
    const dispatch=useAppDispatch();

    const searchHandler=()=>{
        if(searchBy === "Id"){
            dispatch(fetchPharmacy(parseInt(input)))
        }else if (searchBy === "Name"){
            dispatch(fetchPharmacyByName(input,1,3))
        }
    }

    return(
        <div>
                                <div>
                        <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select search by:</label>
                        <div className="flex flex-wrap justify-between -mx-3 mb-2">
                            <div className=" max-w-fit md:w-1/3 px-3 mb-6 md:mb-0">
                            <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="Id">ID</option>
                            <option value="Name">Name</option>
                        </select>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-fit relative">
                <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {searchBy === "Id" ? "Search by Id" : "Search by Name"}
                </label>
            </div>
            <div className="max-w-fit inline">
                <div className="flex flex-wrap justify-between -mx-3 mb-2">
                    <div className=" max-w-fit md:w-1/3 px-3 mb-6 md:mb-0">
                        <input type={searchBy === "Id" ? "number" : "text"} onChange={(e) => setInput(e.target.value)} className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
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