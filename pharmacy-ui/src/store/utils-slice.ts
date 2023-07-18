import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { BooleanUtilsArrayModel, } from "../models/utils";


const initialBooleanUtilsState:BooleanUtilsArrayModel={
    viewAll: false
};

const utilsSlice=createSlice({
    name:'utils',
    initialState: initialBooleanUtilsState,
    reducers:{
        setViewAll(state,action:PayloadAction<Boolean>){
            state.viewAll=action.payload;
        }
    }
})
export default utilsSlice;