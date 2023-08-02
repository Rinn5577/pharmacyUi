import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchPharmacyList } from "../../store/actions/pharmacy-actions";
import LargePharmacyCard from "../Pharmacy/LargeCard";
import { getIdsFromLocalStorage } from "./utils/localStorage";
import NotificationBanner from "../Notification/NotificationBanner";
import { SearchParams } from "../Search/types/searchParams";


const Favorites = () => {
  const favorites = useAppSelector((state) => state.pharmacy.pharmacy_list);
  const dispatch = useAppDispatch();
  let keys = getIdsFromLocalStorage();

  useEffect(() => {
    loadFavoritePharmacyList();
  }, []);

  const loadFavoritePharmacyList = () => {
    let faveSearch = {} as SearchParams;
    faveSearch.searchBy = "Id";
    faveSearch.idArray = keys;

    if (keys.length > 0) {
      dispatch(fetchPharmacyList(1, faveSearch));
    }
  };

  const checkFavoritePharmacyList = () => {
    if (keys.length === 0) {
      return <p>Add a pharmacy to your favorites to view! </p>;
    }
    return (
      <div>
        {favorites.map((pharmacy) => (
          <div key={pharmacy.id}>
            <LargePharmacyCard {...pharmacy} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <NotificationBanner />
      <div className=" px-6 py-8 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
        <h2>Your Favorites</h2>
        {checkFavoritePharmacyList()}
      </div>
    </>
  );
};

export default Favorites;
