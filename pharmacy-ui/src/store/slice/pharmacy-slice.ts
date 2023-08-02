import { Pharmacy } from '../../components/Pharmacy/types/Pharmacy';
import {  PharmacyStateArray } from '../types/pharmacyState';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialPharmacyState: PharmacyStateArray = {
  pharmacy_list: [],
  pharmacy: {
    id: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    filledPrescriptionsMonthToDate: 0,
    createdAt: "",
    updatedAt: "",
  },
};

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: initialPharmacyState,
  reducers: {
    setPharmacyList(state, action: PayloadAction<Pharmacy[]>) {
      state.pharmacy_list = action.payload;
    },
    setPharmacy(state, action: PayloadAction<Pharmacy>) {
      state.pharmacy = action.payload;
    },
  },
});

export default pharmacySlice;
