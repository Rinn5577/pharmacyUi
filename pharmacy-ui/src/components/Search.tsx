import React, { useState} from "react";
import { useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import { fetchPharmacy, fetchPharmacyByName } from "../store/pharmacy-actions";
import { setSearchParams } from "../store/utils-actions";

const Search=()=>{
    const dispatch=useAppDispatch();
    const searchParams = useAppSelector(state=>state.utils.searchParams)
    const [updatedSearch, setUpdatedSearch] = useState(searchParams)

    const searchHandler=()=>{
        updatedSearch.isSearching = true;
        dispatch(setSearchParams(updatedSearch))
        if(updatedSearch.searchBy === "Id"){
            dispatch(fetchPharmacy(parseInt(updatedSearch.input)))
        }else if (updatedSearch.searchBy === "Name"){
            dispatch(fetchPharmacyByName(updatedSearch.input,1,3))
        }
    }

    const onChangeHandler=(event:any)=>{
            setUpdatedSearch({...updatedSearch,[event.target.name] : event.target.value})
    }

    return(
        <div>
                                <div>
                        <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select search by:</label>
                        <div className="flex flex-wrap justify-between -mx-3 mb-2">
                            <div className=" max-w-fit md:w-1/3 px-3 mb-6 md:mb-0">
                            <select value={updatedSearch.searchBy} name="searchBy" onChange={(e) => onChangeHandler(e)}className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="Id">ID</option>
                            <option value="Name">Name</option>
                        </select>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-fit relative">
                <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {updatedSearch.searchBy === "Id" ? "Search by Id" : "Search by Name"}
                </label>
            </div>
            <div className="max-w-fit inline">
                <div className="flex flex-wrap justify-between -mx-3 mb-2">
                    <div className=" max-w-fit md:w-1/3 px-3 mb-6 md:mb-0">
                        <input type={updatedSearch.searchBy === "Id" ? "number" : "text"} name="input" onChange={(e) => onChangeHandler(e)} className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <button onClick={searchHandler} name="isSearching" className=" hover:bg-nuvemBlue bg-nuvemGreen hover:text-nuvemGreen text-nuvemBlue text-center py-2 px-4 rounded-full">
                            Search
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;