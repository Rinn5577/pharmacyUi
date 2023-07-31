import { ThunkAction } from "redux-thunk";
import utilsSlice from "./utils-slice";
import { RootState } from "./index";
import { AnyAction } from "@reduxjs/toolkit";
import { ApiResponse, SearchParams } from "../types/utils";

export const utilsReducers = utilsSlice.actions;

export const setCurrentPage = (
  number: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.setCurrentPage(number));
  };
};
export const setPharmacyResponse = (
  response: ApiResponse
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.setPharmacyResponse(response));
  };
};
export const setSearchParams = (
  searchParams: SearchParams
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.setSearchParams(searchParams));
  };
};
export const resetSearchParams = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch(utilsReducers.resetSearchParams());
  };
};
