import React from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import HorizontalPharmacyCard from "./HorizontalPharmacyCard";

const PharmacyList = () =>{

    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    
    const checkPharmacyList=()=>{
        if(pharmacyList.length === 0){
            return false
        } return true

    }

    return(
        
            <div className="pt-3">
                {checkPharmacyList() && (
                    pharmacyList.map((pharmacy)=>(
                        <div key={pharmacy.id}>
                        <HorizontalPharmacyCard {...pharmacy}/>
                        </div>
            )) 
                )}
            </div>
    )
}

export default PharmacyList;