import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyByName, fetchPharmacyList } from "../store/pharmacy-actions";
import { setCurrentPage } from "../store/utils-actions";

//TODO:
//ive taken out the check to render for now, but should check total count
//build ui for pageSize selector 
const Pagination = () => {

    const dispatch = useAppDispatch();
    const currentPage=useAppSelector(state=>state.utils.currentPage)
    const searchParams = useAppSelector(state=>state.utils.searchParams)
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const [totalPages, setTotalPages] = useState(2) //need to pull in total pages from API
    const [pageSize, setPageSize] = useState(3) //i only want 3 pharmacies returned at a time right now


    //Handlers
    const backClickHandler = () =>{
        const test = searchParams;
        var newNum = (currentPage-1); 
        if(test.isSearching === false){
            dispatch(fetchPharmacyList(newNum,pageSize))
            dispatch(setCurrentPage(newNum))
        } else if (test.isSearching === true && searchParams.searchBy === "Name"){
            dispatch(fetchPharmacyByName(test.input,newNum,pageSize))
            dispatch(setCurrentPage(newNum))
        }

    }

    const nextClickHandler = () =>{
        const test = searchParams;
        var newNum = (currentPage+1); 
        if(test.isSearching === false){
            dispatch(fetchPharmacyList(newNum,pageSize))
            dispatch(setCurrentPage(newNum))
        } else if (test.isSearching === true && test.searchBy === "Name"){
            dispatch(fetchPharmacyByName(test.input, newNum,pageSize))
            dispatch(setCurrentPage(newNum))
        }


    }


 
    return(

        <div >
     
                                <div className=" inline space-x-5">
                                <button onClick={backClickHandler} disabled={currentPage > 1 ? false:true} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                                    Back
                               </button> 
                               <p className="inline">Page ___ of ___ </p>
                               <button onClick={nextClickHandler} disabled={((currentPage === totalPages)|| pharmacyList.length < 3)  ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                                   Next
                               </button> 
                           </div>
        

        </div>
    )
}

export default Pagination;