import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, fetchPharmacy } from '../store/pharmacy-actions';
import React from "react";
import UpdateForm from "./UpdateForm";
import Search from "./Search";
import PharmacyView from "./PharmacyList";
import PharmacyList from "./PharmacyList";
import NavBar from "./NavBar";

const Playground=()=>{

    //checks to see if the pharmacy set in state has an id other than 0
    //if it does it will render the updateform component. 
    //this is temporary, will replace by making updateform open as a modal
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy);
    const checkPharmacy=():boolean=>{
        if(pharmacy.id === 0){
            return false
        }
        return true
    }


    return(
        <>
        <NavBar></NavBar>
        <Search></Search>
        <PharmacyList></PharmacyList>
        {
                        checkPharmacy() &&
                        <div>
                            <UpdateForm></UpdateForm>
                        </div>
        }

        </>

    )
}

export default Playground;