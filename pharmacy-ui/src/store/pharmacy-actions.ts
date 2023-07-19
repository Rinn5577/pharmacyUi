import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"
import { AxiosError } from 'axios';




export const pharmacyActions=pharmacySlice.actions

export const fetchPharmacyList=(pageNumber:number, pageSize:number):ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch,getState)=>{
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList(pageNumber,pageSize);
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

        } catch (_err) {
            let err =(_err as AxiosError)
            //need to figure out how to use this error to display some info about the id not being valid?
            //maybe if i define the error as a type? like everything included in the error object and then i can access that information. 
            //would i then need to make an error slice for the store? need to look into this more
            console.log(err.message)
            console.log(err.response?.data)
        }


    }
}

//added this for the pharmacyView button to set the target pharmacy as the active pharmacy so updateForm can reach it
export const setPharmacy=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        dispatch(pharmacyActions.setPharmacy(pharmacy))
    }
}

//updates the database
export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
        dispatch(pharmacyActions.setPharmacy(response))
    }
}



///lookinto pre-fetch 