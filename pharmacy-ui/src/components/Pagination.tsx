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
    // const [totalPages, setTotalPages] = useState(2) //need to pull in total pages from API
    const [pageSize, setPageSize] = useState(3) //i only want 3 pharmacies returned at a time right now


    const navigateClickHandler = (direction:string) =>{
        let pageNum = currentPage
        if(direction === "back"){
             pageNum = (currentPage-1);
        }else if (direction === "next"){
             pageNum = (currentPage+1);
        }

        if(searchParams.isSearching === false){
            dispatch(fetchPharmacyList(pageNum,pageSize))
            dispatch(setCurrentPage(pageNum))
        } else if (searchParams.isSearching === true && searchParams.searchBy === "Name"){
            dispatch(fetchPharmacyByName(searchParams.input, pageNum,pageSize))
            dispatch(setCurrentPage(pageNum))
        }

    }


    return(
            <div className=" inline space-x-[700px] ml-8">
                <button onClick={() => navigateClickHandler("back")} disabled={currentPage > 1 ? false:true} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Back
                </button> 
                <button onClick={() => navigateClickHandler("next")} disabled={((pharmacyList.length < 3)|| pharmacyList.length < 3)  ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Next
                </button> 
            </div>
    )
}

export default Pagination;