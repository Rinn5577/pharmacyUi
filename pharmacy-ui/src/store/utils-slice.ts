import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, SearchParams, UtilsStateArray } from "../types/utils";

const initialUtilsState: UtilsStateArray = {
  currentPage: 1,
  pharmacyResponse: {
    code: "",
    message: "",
    response: "",
    status: 0,
    show: false,
  },
  searchParams: {
    searchBy: "default",
    name: "",
    idArray: [],
  },
};

const utilsSlice = createSlice({
  name: "utils",
  initialState: initialUtilsState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPharmacyResponse(state, action: PayloadAction<ApiResponse>) {
      state.pharmacyResponse = action.payload;
    },
    resetPharmacyResponse(state) {
      state.pharmacyResponse = initialUtilsState.pharmacyResponse;
    },
    setSearchParams(state, action: PayloadAction<SearchParams>) {
      state.searchParams = action.payload;
    },
    resetSearchParams(state) {
      state.searchParams = initialUtilsState.searchParams;
    },
  },
});
export default utilsSlice;
