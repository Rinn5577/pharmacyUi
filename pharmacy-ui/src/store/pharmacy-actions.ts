import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"
import { AxiosError } from "axios";



export const pharmacyActions=pharmacySlice.actions

export const fetchPharmacyList=():ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch,getState)=>{
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList();
            dispatch(pharmacyActions.setPharmacyList(response))
            //this is saying if the current state is 0 then you can get the list, not sure i need it 
        // if(getState().pharmacy.pharmacy_list.length===0){
        //     const response:PharmacyModel[]=await PharmacyService.getPharmacyList();
        //     dispatch(pharmacyActions.setPharmacyList(response))
        // }
    }
}

export const fetchPharmacy=(pharmacy_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        try {
                const response:PharmacyModel=await PharmacyService.getPharmacy(pharmacy_id);
                dispatch(pharmacyActions.setPharmacy(response))

        } catch (error) {
            //need to figure out how to use this error to display some info about the id not being valid?
            console.log(error)
        }


    }
}


//im 99% sure this is incorrect. i dont think i should be using dispatch. maybe something about saving changes, need to research 
export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
        //to reload pharmacy list? might be a better way to do this
        fetchPharmacyList()
        console.log(response)
        //sets the pharmacy with the returned info 
        dispatch(pharmacyActions.setPharmacy(response))
    }
}



///lookinto pre-fetch 