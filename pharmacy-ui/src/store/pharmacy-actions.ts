import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyArrayModel, PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"
import { AxiosError } from 'axios';
import { utilsActions } from "./utils-actions";





export const pharmacyActions=pharmacySlice.actions

const createErrorObj = (err:AxiosError)=>{
    let tempError = {
        "code": err.code,
        "message": err.message,
        "response": err.response?.data,
        "status": err.response?.status
    }
    return tempError;
}

export const fetchPharmacyList=(pageNumber:number, pageSize:number):ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch)=>{
        try {
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList(pageNumber,pageSize);
            dispatch(pharmacyActions.setPharmacyList(response))
            dispatch(utilsActions.resetPharmacyError())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsActions.setPharmacyError(newError))
        }


    }
}

export const fetchPharmacy=(pharmacy_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    
    return async(dispatch)=>{
        try {
                const response:PharmacyModel=await PharmacyService.getPharmacy(pharmacy_id);
                const newArray:PharmacyModel[] = [];
                newArray.push(response)
                dispatch(pharmacyActions.setPharmacyList(newArray))
                dispatch(utilsActions.resetPharmacyError())

        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsActions.setPharmacyError(newError))

        }


    }
}



//added this for the pharmacyView button to set the target pharmacy as the active pharmacy so updateForm can reach it
export const setTargetPharmacy=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(pharmacyActions.setPharmacy(pharmacy))
    }
}

//updates the database
export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        try {
            const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
            dispatch(pharmacyActions.setPharmacy(response))
            dispatch(utilsActions.resetPharmacyError())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsActions.setPharmacyError(newError))
        }

    }
}


export const setPharmacyFavoritesList=(favoritePharmacyList:PharmacyModel[]):ThunkAction<void, RootState, unknown,AnyAction>=>{
    return async(dispatch)=>{
            dispatch(pharmacyActions.setPharmacyFavoriteList(favoritePharmacyList))
    }
}