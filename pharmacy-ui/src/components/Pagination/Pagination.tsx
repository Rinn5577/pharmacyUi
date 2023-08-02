import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchPharmacyList } from "../../store/actions/pharmacy-actions";
import { setCurrentPage } from "../../store/actions/utils-actions";
import Button from "../Button";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.utils.currentPage);
  const searchParams = useAppSelector((state) => state.utils.searchParams);

  //used only for the disable hack. Otherwise paginagtion doesnt care about the list
  const pharmacyList = useAppSelector((state) => state.pharmacy.pharmacy_list);

  const navigateClickHandler = (direction: string) => {
    let newPage = updateCurrentPage(direction);
    dispatch(fetchPharmacyList(newPage, searchParams));
  };

  const updateCurrentPage = (direction: string) => {
    let page = currentPage;
    if (direction === "back") {
      page = currentPage - 1;
    } else if (direction === "next") {
      page = currentPage + 1;
    }
    dispatch(setCurrentPage(page));
    return page;
  };

  const disableHack = () => {
    //a placeholder until I get the total count returned from api
    if (
      currentPage == 2 ||
      pharmacyList.length < 3 ||
      pharmacyList[pharmacyList.length - 1].id === 5
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className=" flex flex-row justify-between ml-6 mr-6">
      <Button
        onClick={() => navigateClickHandler("back")}
        disabled={currentPage == 1 ? true : false}
        variant="default"
        size="lg"
      >
        Back
      </Button>
      <Button
        onClick={() => navigateClickHandler("next")}
        disabled={disableHack()}
        variant="default"
        size="lg"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
