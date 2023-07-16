import React from "react";
import {Button} from '@mui/material'
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, setPharmacy } from "../store/pharmacy-actions";

const PharmacyList = () =>{

    const dispatch=useAppDispatch();
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);

    //this loads all the pharmacies
    const clickHandler=()=>[
        dispatch(fetchPharmacyList())
    ]

    //makes sure the pharmacy array isn't empty and if it is it doesn't render the jsx
    const checkPharmacyList=():boolean=>{
        if(pharmacyList.length===0){
            return false
        }
        return true
    }

    //when edit is clicked the id is passed in, the pharmacy with a matching id is grabbed from the pharmacy array
    //it is then dispatched to the setPharmacy function in pharmacy actions. 
    const editClickHandler=(e: React.MouseEvent<HTMLButtonElement>, value: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        dispatch(setPharmacy(targetPharmacy))
    }

    return(
        <>
        <h2>Pharmacy View</h2>
        <div>
            <Button variant="outlined" onClick={clickHandler} >View All Pharmacies</Button>
        </div>

        {checkPharmacyList() &&  
        pharmacyList.map((pharmacy)=>(
        <div key={pharmacy.id}>
            <h2>{pharmacy.name}</h2>
            <Button  variant="outlined" onClick={(e)=>editClickHandler(e,pharmacy.id)}>Edit Pharmacy</Button>
        </div>
        ))}

        </>
    )
}

export default PharmacyList;