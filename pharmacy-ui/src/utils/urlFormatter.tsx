import { SearchParams } from "../types/searchParams";

export const urlFormatter = (page: number, search: SearchParams) => {
  let baseUrl = `?page=${page}`;
  if (search.searchBy === "Id" && search.idArray !== undefined) {
    let newUrlArray = [];
    for (const id of search.idArray) {
      let urlSegment = `&ids=${id}`;
      newUrlArray.push(urlSegment);
    }
    return baseUrl + newUrlArray.join("");
  } else if (search.searchBy === "Name" && search.name !== undefined) {
    return baseUrl + `&name=${search.name}`;
  } else return baseUrl;
};
