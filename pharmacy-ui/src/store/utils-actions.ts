import { ThunkAction } from "redux-thunk";
import utilsSlice from "./utils-slice";
import { RootState } from './index';
import { AnyAction } from "@reduxjs/toolkit";
import { ErrorModel } from "../models/utils";

export const utilsActions=utilsSlice.actions
export const setViewAll=(boolean:Boolean):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsActions.setViewAll(boolean))
    }
}
export const setCurrentPage=(number:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsActions.setCurrentPage(number))
    }
}
export const setPharmacyError=(error:ErrorModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(utilsActions.setPharmacyError(error))
    }
}