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
    let newError = {
        "code": err.code,
        "message": err.message,
        "response": err.response?.data,
        "status": err.response?.status,
        "show": true
    }
    return newError;
}

export const fetchPharmacyList=(page:number, search_by:string, ids?:Array<string>, name?:string):ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch)=>{
        try {
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList(page,search_by, ids,name);
            dispatch(pharmacyReducers.setPharmacyList(response))
            dispatch(utilsReducers.resetPharmacyResponse())
        }  catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsReducers.setPharmacyResponse(newError))
        }
    }
}

export const setTargetPharmacy=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        try {
            dispatch(pharmacyReducers.setPharmacy(pharmacy))
            dispatch(utilsReducers.resetPharmacyResponse())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsReducers.setPharmacyResponse(newError))
        }
        
    }
}

export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        try {
            const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
            dispatch(pharmacyReducers.setPharmacy(response))
            dispatch(utilsReducers.resetPharmacyResponse())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsReducers.setPharmacyResponse(newError))
        }
    }
}


