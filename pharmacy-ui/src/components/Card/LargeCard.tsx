import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setTargetPharmacy } from "../../store/actions/pharmacy-actions";
import {
  addToLocalStorage,
  getIdsFromLocalStorage,
} from "../../utils/localStorage";
import Button from "../Button";
import { useEffect } from "react";
import { setResponseNotification } from "../../store/actions/utils-actions";
import { favoriteResponseFormatter } from "../../utils/responseFormatter";
import { Pharmacy } from "../../types/Pharmacy";
import PharmacyEntity from "../PharmacyEntity";

const LargeCard = (pharmacy: Pharmacy) => {
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
    let response = addToLocalStorage(id, favoriteResponseFormatter);
    dispatch(setResponseNotification(response));
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
      <PharmacyEntity {...pharmacy} />
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

export default LargeCard;
