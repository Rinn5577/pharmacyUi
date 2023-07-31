import { SearchParamsModel } from "../models/utils";

export const searchFormatter = (searchParams: SearchParamsModel) =>{

    let newSearch = {} as SearchParamsModel; 
    newSearch.searchBy = searchParams.searchBy

    if(searchParams.searchBy === "Id" && searchParams.input != null){
        newSearch.idArray = [searchParams.input]
    }else if (searchParams.searchBy === "Name" && searchParams.input != null){
        newSearch.name = searchParams.input
    }

    return newSearch
}
