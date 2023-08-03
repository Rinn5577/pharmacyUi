import pharmacySlice from "../slice/pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import PharmacyService from "../../service/service/pharmacyService";
import { utilsReducers } from "./utils-actions";
import { AxiosError } from "axios";
import { apiResponseFormatter } from "../../utils/Formatters/responseFormatter";
import { SearchParams } from "../../types/searchParams";
import { Pharmacy } from "../../types/Pharmacy";

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
      dispatch(utilsReducers.resetResponseNotification());
    } catch (_err) {
      let err = _err as AxiosError;
      let response = apiResponseFormatter(err);
      dispatch(utilsReducers.setResponseNotification(response));
    }
  };
};

export const setTargetPharmacy = (
  pharmacy: Pharmacy
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(pharmacyReducers.setPharmacy(pharmacy));
      dispatch(utilsReducers.resetResponseNotification());
    } catch (_err) {
      let err = _err as AxiosError;
      let response = apiResponseFormatter(err);
      dispatch(utilsReducers.setResponseNotification(response));
    }
  };
};

export const postPharmacyUpdate = (
  pharmacy: Pharmacy
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const response: Pharmacy = await PharmacyService.updatePharmacy(pharmacy);
      dispatch(pharmacyReducers.setPharmacy(response));
      dispatch(utilsReducers.resetResponseNotification());
    } catch (_err) {
      let err = _err as AxiosError;
      let response = apiResponseFormatter(err);
      dispatch(utilsReducers.setResponseNotification(response));
    }
  };
};
