import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from '../store/pharmacy-actions';
import { setCurrentPage } from "../store/utils-actions";
import { getKeysFromLocalStorage } from "../utils/localStorage";

//TODO:
//ive taken out the check to render for now, but should check total count
//build ui for pageSize selector 
const Pagination = () => {

    const dispatch = useAppDispatch();
    const currentPage=useAppSelector(state=>state.utils.currentPage)
    const searchParams = useAppSelector(state=>state.utils.searchParams)
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    let page = currentPage

    const navigateClickHandler = (direction:string) =>{

        const pageSize = 3;
        const searchby = searchParams.searchBy
        let idArray: string[] = [];
        let name = ""; 
        
        if(searchParams.searchBy === "Id"){
            idArray = [searchParams.input]
        }else if (searchParams.searchBy === "Name"){
            name = searchParams.input
        }else if (searchParams.searchBy === "Favorite"){
            idArray = getKeysFromLocalStorage()
        }

        updateCurrentPage(direction)
        dispatch(fetchPharmacyList(page,pageSize,searchby,idArray,name))
        
    }

    const updateCurrentPage = (direction:string) =>{
        if(direction === "back"){
            page = (currentPage-1);
       }else if (direction === "next"){
           page = (currentPage+1);       
       }
        dispatch(setCurrentPage(page))
    }

    return(
            <div className=" inline space-x-[700px] ml-8">
                <button onClick={() => navigateClickHandler("back")} disabled={currentPage == 1 ? true:false} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Back
                </button> 
                <button onClick={() => navigateClickHandler("next")} disabled={((pharmacyList.length < 3)|| pharmacyList.length < 3)  ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                Next
                </button> 
            </div>
    )
}

export default Pagination;