import { ThunkAction } from "redux-thunk";
import utilsSlice from "../slice/utils-slice";
import { RootState } from "../index";
import { AnyAction } from "@reduxjs/toolkit";
import { ResponseNotification } from "../../types/ResponseNotification";
import { SearchParams } from "../../types/searchParams";

export const utilsReducers = utilsSlice.actions;

export const setCurrentPage = (
  number: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.setCurrentPage(number));
  };
};
export const setResponseNotification = (
  response: ResponseNotification
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.setResponseNotification(response));
  };
};
export const resetResponseNotification = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(utilsReducers.resetResponseNotification());
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
