import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyListTest } from '../store/pharmacy-actions';
import { setCurrentPage } from "../store/utils-actions";

//TODO:
//ive taken out the check to render for now, but should check total count
//build ui for pageSize selector 
const Pagination = () => {

    const dispatch = useAppDispatch();
    const currentPage=useAppSelector(state=>state.utils.currentPage)
    const searchParams = useAppSelector(state=>state.utils.searchParams)
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);

    const navigateClickHandler = (direction:string) =>{
        let page = currentPage
        const pageSize = 3;
        let idArray: string[] = [];
        let name = ""; 
        let searchby = searchParams.searchBy

        if(direction === "back"){
             page = (currentPage-1);
        }else if (direction === "next"){
             page = (currentPage+1);
        }

        if(searchParams.searchBy === "Id"){
            idArray = [searchParams.input]
        }else if (searchParams.searchBy === "Name"){
            name = searchParams.input
        }

        dispatch(fetchPharmacyListTest(page,pageSize,searchby,idArray,name))

    }


    return(
            <div className=" inline space-x-[700px] ml-8">
                <button onClick={() => navigateClickHandler("back")} disabled={currentPage == 1 ? false:true} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Back
                </button> 
                <button onClick={() => navigateClickHandler("next")} disabled={((pharmacyList.length < 3)|| pharmacyList.length < 3)  ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Next
                </button> 
            </div>
    )
}

export default Pagination;