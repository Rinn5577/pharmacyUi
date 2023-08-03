import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/actions/pharmacy-actions";
import { setCurrentPage, setSearchParams} from "../store/actions/utils-actions";
import Button from "./Button";
import { searchFormatter } from "../utils/Formatters/searchFormatter";
import Selector from "./Form/Selector";
import FormInput from "./Form/FormInput";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.utils.searchParams);
  const [userInput, setUserInput] = useState(searchParams);

  const onChangeHandler = (event: React.ChangeEvent<any>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const searchClickHandler = () => {
    const newSearch = searchFormatter(userInput);
    
    dispatch(setCurrentPage(1));
    dispatch(setSearchParams(newSearch));
    dispatch(fetchPharmacyList(1, newSearch));
  };

  return (
    <div className="flex flex-col">
      <Selector
        onChange={onChangeHandler}
        value={userInput.searchBy}
        name="searchBy"
        optionValue={["default", "Id", "Name"]}
      >
        Select search by:
      </Selector>

      <div className="flex flex-row mt-2">
        <FormInput
          onChange={onChangeHandler}
          disabled={userInput.searchBy === "default"}
          variant={userInput.searchBy === "Id" ? "number" : "text"}
          name="input"
          size="inputMd"
        >
          {userInput.searchBy === "Id" ? "Search by Id" : "Search by Name"}
        </FormInput>
        <div className="mt-5">
          <Button
            disabled={userInput.searchBy === "default"}
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
