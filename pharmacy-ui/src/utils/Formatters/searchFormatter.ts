import { SearchParams } from "../../types/searchParams";

export const searchFormatter = (searchParams: SearchParams) => {
  let newSearch = {} as SearchParams;
  newSearch.searchBy = searchParams.searchBy;

  if (searchParams.searchBy === "Id" && searchParams.input != null) {
    newSearch.idArray = [searchParams.input];
  } else if (searchParams.searchBy === "Name" && searchParams.input != null) {
    newSearch.name = searchParams.input;
  }

  return newSearch;
};
