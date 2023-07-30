import React, { useState} from "react";
import { useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/pharmacy-actions";
import { setCurrentPage, setSearchParams } from "../store/utils-actions";
import Button from "./Button";

const Search=()=>{
    const dispatch=useAppDispatch();
    const searchParams = useAppSelector(state=>state.utils.searchParams)
    const [updatedSearch, setUpdatedSearch] = useState(searchParams)


    const searchClickHandler=()=>{
        const page = 1;
        const pageSize = 3;
        let idArray: string[] = [];
        let name = ""; 
        let searchby = updatedSearch.searchBy
        updatedSearch.isSearching = true;

        dispatch(setSearchParams(updatedSearch))
        dispatch(setCurrentPage(1))
        if(updatedSearch.searchBy === "Id"){
            idArray = [updatedSearch.input]
        }else if (updatedSearch.searchBy === "Name"){
            name = updatedSearch.input
        }

        dispatch(fetchPharmacyList(page,pageSize,searchby,idArray,name))
    }

    const onChangeHandler=(event:any)=>{
            setUpdatedSearch({...updatedSearch,[event.target.name] : event.target.value})

    }

    return(
        <div>
                               
            <label className="inline left-0  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select search by:</label>
            <div className="flex flex-wrap justify-between -mx-3 mb-2 px-3">
                    <select value={updatedSearch.searchBy} name="searchBy" onChange={(e) => onChangeHandler(e)}className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="default">Select</option>
                        <option value="Id">ID</option>
                        <option value="Name">Name</option>
                    </select>
            </div>
            
            <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {updatedSearch.searchBy === "Id" ? "Search by Id" : "Search by Name"}
            </label>
            <div className="flex flex-wrap justify-between -mx-3 mb-2">
                <div className=" md:w-1/3 px-3 mb-6 md:mb-0">
                        <input disabled={updatedSearch.searchBy === "default"}type={updatedSearch.searchBy === "Id" ? "number" : "text"} name="input" onChange={(e) => onChangeHandler(e)} className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                <Button onClick={searchClickHandler} variant="primary" size="md" disabled={updatedSearch.searchBy === "default"}>Search</Button>
                </div>
            </div>
        </div>
    )
}
export default Search;