import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { Pharmacy } from "../types/pharmacy";
import PharmacyService from "../service/pharmacyService";
import { utilsReducers } from "./utils-actions";
import { ApiResponse, SearchParams } from "../types/utils";
import { AxiosError } from "axios";
import { newErrorResponse } from "../utils/responseFormatter";

export const pharmacyReducers = pharmacySlice.actions;


export const fetchPharmacyList = (
  page: number,
  searchParams: SearchParams
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response: Pharmacy[] = await PharmacyService.getPharmacyList(
        page,
        searchParams
      );
      dispatch(pharmacyReducers.setPharmacyList(response));
      dispatch(utilsReducers.resetPharmacyResponse());
    } catch (_err) {
      let err = _err as AxiosError;
      let response = newErrorResponse(err)
      dispatch(utilsReducers.setPharmacyResponse(response));
    }
  };
};

export const setTargetPharmacy = (
  pharmacy: Pharmacy
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(pharmacyReducers.setPharmacy(pharmacy));
      dispatch(utilsReducers.resetPharmacyResponse());
    } catch (_err) {
      let err = _err as ApiResponse;
      err.show = true;
      dispatch(utilsReducers.setPharmacyResponse(err));
    }
  };
};

export const postPharmacyUpdate = (
  pharmacy: Pharmacy
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response: Pharmacy = await PharmacyService.updatePharmacy(
        pharmacy
      );
      dispatch(pharmacyReducers.setPharmacy(response));
      dispatch(utilsReducers.resetPharmacyResponse());
    } catch (_err) {
      let err = _err as ApiResponse;
      err.show = true;
      dispatch(utilsReducers.setPharmacyResponse(err));
    }
  };
};
