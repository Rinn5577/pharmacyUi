import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from '../store/pharmacy-actions';
import { setCurrentPage } from "../store/utils-actions";
import { getKeysFromLocalStorage } from "../utils/localStorage";
import Button from "./Button";

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
        console.log(searchby)
        let idArray: string[] = [];
        let name = ""; 
        
        if(searchParams.searchBy === "Id"){
            idArray = [searchParams.input]
        }else if (searchParams.searchBy === "Name"){
            name = searchParams.input
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
            <div className=" flex flex-row justify-between ml-6 mr-6">
                <Button onClick={() => navigateClickHandler("back")} disabled={currentPage == 1 ? true:false} variant="default" size="lg">Back</Button>
                <Button onClick={() => navigateClickHandler("next")} disabled={(currentPage == 2 || pharmacyList.length < 3)  ? true:false} variant="default" size="lg">Next</Button>
            </div>
    )
}

export default Pagination;