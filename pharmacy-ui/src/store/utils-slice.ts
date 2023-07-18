import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { UtilsArrayModel} from "../models/utils";


const initialUtilsState:UtilsArrayModel={
    viewAll: true,
    currentPage: 1
};


const utilsSlice=createSlice({
    name:'utils',
    initialState: initialUtilsState,
    reducers:{
        setViewAll(state,action:PayloadAction<Boolean>){
            state.viewAll=action.payload;
        },
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage=action.payload;
        }
    }
})
export default utilsSlice;

