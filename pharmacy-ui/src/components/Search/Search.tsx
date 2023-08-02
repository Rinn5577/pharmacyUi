import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchPharmacyList } from "../../store/actions/pharmacy-actions";
import {
  setCurrentPage,
  setSearchParams,
} from "../../store/actions/utils-actions";
import Button from "../Button";
import { searchFormatter } from "./utils/searchFormatter";
import Selector from "../Form/Selector";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.utils.searchParams);
  const [searchInput, setSearchInput] = useState(searchParams);

  const searchClickHandler = () => {
    dispatch(setCurrentPage(1));
    const newSearch = searchFormatter(searchInput);
    dispatch(setSearchParams(newSearch));
    dispatch(fetchPharmacyList(1, newSearch));
  };

  const onChangeHandler = (event: React.ChangeEvent<any>) => {
    setSearchInput({ ...searchInput, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col">
      <Selector
        onChange={onChangeHandler}
        value={searchInput.searchBy}
        name="searchBy"
        optionValue={["default", "Id", "Name"]}
      >
        Select search by:
      </Selector>

      <div>
        <label className="inline left-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {searchInput.searchBy === "Id" ? "Search by Id" : "Search by Name"}
        </label>
        <div className="flex flex-row">
        <input
          disabled={searchInput.searchBy === "default"}
          type={searchInput.searchBy === "Id" ? "number" : "text"}
          name="input"
          onChange={(e) => onChangeHandler(e)}
          className="appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <Button
          disabled={searchInput.searchBy === "default"}
          onClick={searchClickHandler}
          variant="primary"
          size="md"
        >
          Search
        </Button>
        </div>

      </div>

    </div>
  );
};
export default Search;
