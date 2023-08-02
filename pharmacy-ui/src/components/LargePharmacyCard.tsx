import React, { useState } from "react";
import { Pharmacy } from "../types/pharmacy";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setTargetPharmacy } from "../store/pharmacy-actions";
import {
  addToLocalStorage,
  getIdsFromLocalStorage,
} from "../utils/localStorage";
import Button from "./Button";
import { useEffect } from "react";
import { setResponseNotification } from "../store/utils-actions";

const LargePharmacyCard = (pharmacy: Pharmacy) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pharmacyList = useAppSelector((state) => state.pharmacy.pharmacy_list);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(checkIsFavorite());
  }, []);

  const editClickHandler = (id: number) => {
    let targetPharmacy = pharmacyList.filter(
      (pharmacy) => pharmacy.id === id
    )[0];
    dispatch(setTargetPharmacy(targetPharmacy));
    navigate(`/${pharmacy.id.toString()}`);
  };

  const favoriteClickHandler = (id: number) => {
    let response = addToLocalStorage(id);
    dispatch(setResponseNotification(response))
    setDisabled(checkIsFavorite());
  };

  const checkIsFavorite = () => {
    let id = pharmacy.id;
    let keys = getIdsFromLocalStorage();
    if (keys.includes(id.toString())) {
      return true;
    }
    return false;
  };

  return (
    <div className=" my-4 border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <p className="text-sm text-gray-600 flex items-center">
        Pharmacy ID: {pharmacy.id}
      </p>
      <p className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</p>
      <p className="text-gray-700 text-base">{pharmacy.address}</p>
      <p className="text-gray-700 text-base">
        {pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}
      </p>
      <p className="text-gray-700 text-base mb-6">
        Appeal to the client, sue the vice president . I got your invoice...it
        seems really high, why did you charge so much can you make the logo
        bigger yes bigger bigger still the logo is too big im not sure, try
        something else.
      </p>

      <div>
        <Button
          onClick={() => favoriteClickHandler(pharmacy.id)}
          disabled={disabled}
          variant="primary"
          size="lg"
        >
          Add Favorite
        </Button>
        <Button
          onClick={() => editClickHandler(pharmacy.id)}
          variant="default"
          size="md"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default LargePharmacyCard;
