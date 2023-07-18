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


    const clickHandler=()=>[
        dispatch(fetchPharmacyList()),
        dispatch(setViewAll(true))
    ]


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
            <div className=" ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="px-6 py-8">
                <div className="flex justify-between">
                    <div className=" self-center inline">
                        <button onClick={clickHandler} className=" bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
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