import { PharmacyModel, PharmacyArrayModel} from '../models/pharmacy'
import {createSlice,PayloadAction} from "@reduxjs/toolkit";

const initialPharmacyState:PharmacyArrayModel={
    pharmacy_list:[],
    pharmacy:{
        "id": 0,
        "name": "",
        "address": "",
        "city": "",
        "state": "",
        "zipcode": "",
        "filledPrescriptionsMonthToDate": 0,
        "createdAt": "",
        "updatedAt": ""
    }
}


const pharmacySlice=createSlice({
    name:'pharmacy',
    initialState: initialPharmacyState,
    reducers:{
        setPharmacyList(state,action:PayloadAction<PharmacyModel[]>){
            state.pharmacy_list=action.payload;
        },
        setPharmacy(state,action:PayloadAction<PharmacyModel>){
            state.pharmacy=action.payload;
        }
    }
})

export default pharmacySlice;