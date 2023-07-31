import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { ResponseModel, SearchParamsModel, UtilsArrayModel} from "../models/utils";


const initialUtilsState:UtilsArrayModel={
    currentPage: 1,
    pharmacyResponse:{
        "code": "",
        "message": "",
        "response": "",
        "status": 0,
        "show": false
    },
    searchParams:{
        "searchBy": "default",
        "name": "",
        "idArray": [],
    }
};

const utilsSlice=createSlice({
    name:'utils',
    initialState: initialUtilsState,
    reducers:{
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage=action.payload;
        },
        setPharmacyResponse(state,action:PayloadAction<ResponseModel>){
            state.pharmacyResponse=action.payload;
        },
        resetPharmacyResponse(state){
            state.pharmacyResponse=initialUtilsState.pharmacyResponse;
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

