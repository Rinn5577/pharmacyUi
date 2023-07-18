import { ThunkAction } from "redux-thunk";
import utilsSlice from "./utils-slice";
import { RootState } from './index';
import { AnyAction } from "@reduxjs/toolkit";

export const utilsActions=utilsSlice.actions
export const setViewAll=(boolean:Boolean):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        dispatch(utilsActions.setViewAll(boolean))
    }
}