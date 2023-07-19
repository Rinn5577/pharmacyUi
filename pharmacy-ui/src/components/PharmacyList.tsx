import React from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import HorizontalPharmacyCard from "./HorizontalPharmacyCard";


const PharmacyList = () =>{

    
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
    //determines if the user wants to view all of the pharmacies or not
    const viewAllUtil=useAppSelector(state=>state.utils.viewAll)

    //Render Toggle Checks
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
            <div className="pt-3">
                {/*Ternary that checks if the user wants to view all of the pharmacies
                or if the user wants to view one targeted pharmacy */}
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
    )
}

export default PharmacyList;