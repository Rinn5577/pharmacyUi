import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseNotification } from "../../types/ResponseNotification";
import { SearchParams } from "../../types/searchParams";

type UtilsStateArray = {
  currentPage: number;
  responseNotification: ResponseNotification;
  searchParams: SearchParams;
};

const initialUtilsState: UtilsStateArray = {
  currentPage: 1,
  responseNotification: {
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
    setResponseNotification(state, action: PayloadAction<ResponseNotification>) {
      state.responseNotification = action.payload;
    },
    resetResponseNotification(state) {
      state.responseNotification = initialUtilsState.responseNotification;
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
