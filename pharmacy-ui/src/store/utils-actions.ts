import { ThunkAction } from "redux-thunk";
import utilsSlice from "./utils-slice";
import { RootState } from './index';
import { AnyAction } from "@reduxjs/toolkit";
import { ErrorModel, SearchParamsModel } from "../models/utils";

export const utilsReducers=utilsSlice.actions

export const setCurrentPage=(number:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsReducers.setCurrentPage(number))
    }
}
export const setPharmacyError=(error:ErrorModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsReducers.setPharmacyError(error))
    }
}
export const setSearchParams=(searchParams:SearchParamsModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsReducers.setSearchParams(searchParams))
    }
}
export const resetSearchParams=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsReducers.resetSearchParams())
    }

}