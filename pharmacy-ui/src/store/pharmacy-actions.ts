import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"
import { AxiosError } from 'axios';
import { utilsReducers } from "./utils-actions";

export const pharmacyReducers=pharmacySlice.actions

const createErrorObj = (err:AxiosError)=>{
    let tempError = {
        "code": err.code,
        "message": err.message,
        "response": err.response?.data,
        "status": err.response?.status
    }
    return tempError;
}

export const fetchPharmacyList=(page:number, page_size:number, search_by:string, ids?:Array<string>, name?:string):ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch)=>{
        try {
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList(page, page_size,search_by, ids,name);
            dispatch(pharmacyReducers.setPharmacyList(response))
        } catch (error) {
            
        }
    }
}

export const setTargetPharmacy=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(pharmacyReducers.setPharmacy(pharmacy))
    }
}

export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        try {
            const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
            dispatch(pharmacyReducers.setPharmacy(response))
            dispatch(utilsReducers.resetPharmacyError())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsReducers.setPharmacyError(newError))
        }
    }
}


