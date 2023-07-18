import React, { useState } from "react";
import {Button, Grid, Stack} from '@mui/material'
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, setPharmacy } from "../store/pharmacy-actions";
import HorizontalPharmacyCard from "./HorizontalPharmacyCard";
import Search from "./Search";
import { setViewAll } from "../store/utils-actions";

const PharmacyList = () =>{

    const dispatch=useAppDispatch();
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
    const viewAllUtil=useAppSelector(state=>state.utils.viewAll)


    //this loads all the pharmacies
    const clickHandler=()=>[
        dispatch(fetchPharmacyList()),
        dispatch(setViewAll(true))
    ]

    //makes sure the pharmacy array isn't empty and if it is it doesn't render the jsx
    const checkPharmacyList=():boolean=>{
        if(pharmacyList.length===0 || viewAllUtil === false){
            return false
        }
        return true
    }

    const checkPharmacy=():boolean=>{
        if(pharmacy.id > 0 && viewAllUtil === false){
            return true
        } 
            return false
        
        }




    return(
        <div>    
            <div className=" ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-lg border-solid border-2 border-indigo-600">
                <div className="px-6 py-8">
                <div className="flex justify-between">
                    <div className=" self-center inline">
                        <button onClick={clickHandler} className=" bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full">
                            View All
                        </button> 
                    </div>
                    
                        <Search></Search>
                    
                </div>

                <div className="pt-3">

                { checkPharmacyList() 
                ? (
                    pharmacyList.map((pharmacy)=>(
                        <div>
                            <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                        </div>
                    )) 
                )
                : 
                checkPharmacy() 
                ? (
                    <div>
                        <HorizontalPharmacyCard {...pharmacy}/>
                    </div>
                )
                :
                <div>Please select View All or Search for a pharmacy by ID</div>
                }


                </div>

                </div>
            </div>
    
        </div>
    )
}

export default PharmacyList;