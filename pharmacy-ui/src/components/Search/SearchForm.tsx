import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchPharmacyList } from "../../store/actions/pharmacy-actions";
import { setCurrentPage, setSearchParams} from "../../store/actions/utils-actions";
import Button from "../Button";
import { searchFormatter } from "./utils/searchFormatter";
import Selector from "../Form/Selector";
import FormInput from "../Form/FormInput";

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

      <div className="flex flex-row mt-2">
        <FormInput
          onChange={onChangeHandler}
          disabled={searchInput.searchBy === "default"}
          variant={searchInput.searchBy === "Id" ? "number" : "text"}
          name="input"
          size="inputMd"
        >
          {searchInput.searchBy === "Id" ? "Search by Id" : "Search by Name"}
        </FormInput>
        <div className="mt-5">
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
