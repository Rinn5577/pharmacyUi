import { PharmacyModel, PharmacyArrayModel } from "../models/redux-models";
import {createSlice,PayloadAction} from "@reduxjs/toolkit";

const initialPharmacyState:PharmacyArrayModel={
    all_pharmacies:[],
    particular_pharmacy:{
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
        setPharmacies(state,action:PayloadAction<PharmacyModel[]>){
            state.all_pharmacies=action.payload;
        },
        setParticularPharmacy(state,action:PayloadAction<PharmacyModel>){
            state.particular_pharmacy=action.payload;
        }
    }
})
export default pharmacySlice;