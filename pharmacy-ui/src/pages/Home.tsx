import React from "react";
import Search from "../components/SearchForm";
import Pagination from "../components/Pagination";
import CardContainer from "../components/Card/CardContainer";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/actions/pharmacy-actions";
import { resetSearchParams, setCurrentPage } from "../store/actions/utils-actions";
import Button from "../components/Button";
import NotificationBanner from "../components/NotificationBanner";
import { SearchParams } from "../types/searchParams";

const Home = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    const viewAllSearch = {} as SearchParams;
    dispatch(resetSearchParams());
    dispatch(setCurrentPage(1));
    dispatch(fetchPharmacyList(1, viewAllSearch));
  };

  return (
    <>
      <NotificationBanner />
      <div className=" pb-6 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
        <div className="px-6 pt-6">
          <div className="flex justify-between">
            <Search />
            <div className="self-end">
              <Button onClick={clickHandler} variant="default" size="lg">
                View All
              </Button>
            </div>
          </div>
          <CardContainer/>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Home;
