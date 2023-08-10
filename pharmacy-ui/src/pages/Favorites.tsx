import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/actions/pharmacy-actions";
import { getIdsFromLocalStorage } from "../utils/localStorage";
import { SearchParams } from "../types/searchParams";
import CardContainer from "../components/Card/CardContainer";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.pharmacy.pharmacy_list);
  const dispatch = useAppDispatch();
  let ids = getIdsFromLocalStorage();

  useEffect(() => {
    loadFavoritePharmacyList();
  }, [favorites]);

  const loadFavoritePharmacyList = () => {

    if (ids.length > 0) {
      let faveSearch = {} as SearchParams;
      faveSearch.searchBy = "Id";
      faveSearch.idArray = ids;
  
      dispatch(fetchPharmacyList(1, faveSearch));
    }
  };

  const checkFavoritePharmacyList = () => {
    if (ids.length === 0) {
      return false
    }
    return true
  };
  
  return (
    <>
      <div className=" px-6 py-8 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
        <h2>Your Favorites</h2>
        {checkFavoritePharmacyList() &&
        <CardContainer></CardContainer>
        }
      </div>
    </>
  );
};

export default Favorites;
