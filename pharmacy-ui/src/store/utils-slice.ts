import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { ErrorModel, SearchParamsModel, UtilsArrayModel} from "../models/utils";


const initialUtilsState:UtilsArrayModel={
    currentPage: 1,
    pharmacyError:{
        "code": "",
        "message": "",
        "response": "",
        "status": 0
    },
    searchParams:{
        "searchBy": "default",
        "input": "",
        "isSearching": false
    }
};


const utilsSlice=createSlice({
    name:'utils',
    initialState: initialUtilsState,
    reducers:{
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage=action.payload;
        },
        setPharmacyError(state,action:PayloadAction<ErrorModel>){
            state.pharmacyError=action.payload;
        },
        resetPharmacyError(state){
            state.pharmacyError=initialUtilsState.pharmacyError;
        },
        setSearchParams(state,action:PayloadAction<SearchParamsModel>){
            state.searchParams=action.payload;
        },
        resetSearchParams(state){
            state.searchParams=initialUtilsState.searchParams;
        },
    }
})
export default utilsSlice;

