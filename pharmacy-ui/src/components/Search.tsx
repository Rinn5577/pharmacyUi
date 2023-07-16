import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacy } from "../store/pharmacy-actions";
import { Button } from "@mui/material";

const Search=()=>{

    const [pharmacy_id,setPharmacy_id]=useState(1);
    const dispatch=useAppDispatch();
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

//triggers the api call to get pharmacy by id, this also sets the pharmacy state
    const searchHandler=()=>{
        dispatch(fetchPharmacy(pharmacy_id))
    }

//makes sure the id of the pharmacy isn't 0 
//if anything other than 0 it will render. 
    const checkPharmacy=():boolean=>{
        if(pharmacy.id===0){
            return false
        }
        return true
    }


    //can probably extract out the view from this, just keep the logic perhaps? 
    return(
        <>
                <div>
            <label>Enter pharmacy id: </label>
            <input onChange={(event)=>setPharmacy_id(parseInt(event.target.value))} type="number"></input>
            <Button variant="outlined" onClick={searchHandler}>Find</Button>

            <div>

                {
                    checkPharmacy() && 
                    (
                        
                    <div className="pharmacy-container" key={pharmacy.id}>
                        <h3>Pharmacy Info</h3>
                        <p className="pharmacy-child1">{pharmacy.id}</p>
                        <p className="pharmacy-child2">{pharmacy.name}</p>
                        <p className="pharmacy-child3">{pharmacy.filledPrescriptionsMonthToDate}</p>
                        <p className="pharmacy-child4">{pharmacy.createdAt}</p>
                        </div>
                        ) 
                }
            </div>
        </div>
        </>
    )
}
export default Search;