import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/pharmacy-actions";
import { setCurrentPage } from "../store/utils-actions";

//TODO:
//ive taken out the check to render for now, but should check total count
//build ui for pageSize selector 
const Pagination = () => {

    const dispatch = useAppDispatch();
    const currentPage=useAppSelector(state=>state.utils.currentPage)
    const [totalPages, setTotalPages] = useState(2) //need to pull in total pages from API
    const [pageSize, setPageSize] = useState(3) //i only want 3 pharmacies returned at a time right now

    //Handlers
    //doesnt work when navigating through search results, calls an un filtered fetch
    //need to set search params in state and then make decisions on what to call based on that
    const backClickHandler = () =>{
        var newNum = (currentPage-1); 
        dispatch(fetchPharmacyList(newNum,pageSize))
        dispatch(setCurrentPage(newNum))
    }

    const nextClickHandler = () =>{
        var newNum = (currentPage+1); 
        dispatch(fetchPharmacyList(newNum,pageSize))
        dispatch(setCurrentPage(newNum))

    }
 
    return(
        <div >
            <div className=" inline space-x-5">
                 <button onClick={backClickHandler} disabled={currentPage > 1 ? false:true} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                     Back
                </button> 
                <p className="inline">Page ___ of ___ </p>
                <button onClick={nextClickHandler} disabled={currentPage === totalPages ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                    Next
                </button> 
            </div>
        </div>
    )
}

export default Pagination;