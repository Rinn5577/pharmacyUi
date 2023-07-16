import React from "react";
import {Button, Grid, Stack} from '@mui/material'
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, setPharmacy } from "../store/pharmacy-actions";
import Pharmacy from "./Pharmacy";

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



    return(
        <>
        <h2>Pharmacy View</h2>
        <div>
            <Button variant="outlined" onClick={clickHandler} >View All Pharmacies</Button>
        </div>

        <Grid className="pharmacyContainer" container rowSpacing={3} columnSpacing={{ xs: 1}} sx={{paddingTop: 5, paddingLeft: 10}}>
            {checkPharmacyList() &&  
            pharmacyList.map((pharmacy)=>(
                <Grid item xs={3} className="pharmacyGrid"  key={pharmacy.id} >
            
                <Pharmacy {...pharmacy}></Pharmacy>
           
                </Grid>

            ))}
        </Grid>




        </>
    )
}

export default PharmacyList;