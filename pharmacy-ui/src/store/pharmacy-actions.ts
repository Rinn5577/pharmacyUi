import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from "../models/redux-models";
import PharmacyService from "../service/pharmacyService"
import { async } from "q";


export const pharmacyActions=pharmacySlice.actions

export const fetchPharmacies=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().pharmacy.all_pharmacies.length===0){
            const response:PharmacyModel[]=await PharmacyService.getAllPharmacies();
            dispatch(pharmacyActions.setPharmacies(response))
        }
    }
}

export const fetchParticularPharmacy=(pharmacy_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:PharmacyModel=await PharmacyService.getParticularPharmacy(pharmacy_id);
        dispatch(pharmacyActions.setParticularPharmacy(response))
    }
}