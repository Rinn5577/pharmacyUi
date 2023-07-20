import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/pharmacy-actions";
import { setCurrentPage } from "../store/utils-actions";

const Pagination = () => {


    const dispatch = useAppDispatch();
    const currentPage=useAppSelector(state=>state.utils.currentPage)
    //need to pull in total pages from API
    const [totalPages, setTotalPages] = useState(2)
    //currently not letting user change this. i only want 3 pharmacies returned at a time right now
    const [pageSize, setPageSize] = useState(3)
    const viewAllUtil=useAppSelector(state=>state.utils.viewAll)

    //Handlers
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

    //Right now this is necessary for how I have the search set up 
    //in future it will always render if there are pharmacies to be viewed. 
    const checkRender = () =>{
        if(viewAllUtil){
            return true
        } return false

    }
 

    return(
        <div >
            {checkRender() &&
                            <div className=" inline space-x-5">
                                <button onClick={backClickHandler} disabled={currentPage > 1 ? false:true} className="disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                                    Back
                                </button> 
                                <p className="inline">Page ___ of ___ </p>
                                <button onClick={nextClickHandler} disabled={currentPage === totalPages ? true:false}className=" disabled:bg-gray-500 bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                                    Next
                                </button> 
                            </div>
            }

        </div>
    )
}

export default Pagination;