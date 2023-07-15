import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, fetchPharmacy } from '../store/pharmacy-actions';
import React from "react";
import UpdateForm from "./UpdateForm";
import Search from "./Search";
import PharmacyView from "./PharmacyView";

const Pharmacy=()=>{
    //const dispatch=useAppDispatch();
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy);
    console.log(pharmacy)
    // const clickHandler=()=>[
    //     dispatch(fetchPharmacyList())
    // ]

    const checkPharmacy=():boolean=>{
        if(pharmacy.id === 0){
            return false
        }
        return true
    }


    return(
        <>
        <PharmacyView></PharmacyView>
        {
            checkPharmacy() &&
            <div>
                <UpdateForm></UpdateForm>
            </div>

        }

        </>

    )
}

export default Pharmacy;