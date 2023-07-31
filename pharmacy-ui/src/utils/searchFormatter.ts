import { SearchParamsModel } from "../models/utils";

type SearchObj = {
    //page: number;
    // pageSize: number;
    searchBy: string;
    idArray?: string[];
    name?: string;
    
}

export const searchFormatter = (searchParams: SearchParamsModel) =>{

    let newSearch = {} as SearchObj; 
    newSearch.searchBy = searchParams.searchBy
    // newSearch.page = 1
    // newSearch.pageSize = 3
    if(searchParams.searchBy === "Id"){
        newSearch.idArray = [searchParams.input]
    }else if (searchParams.searchBy === "Name"){
        newSearch.name = searchParams.input
    }

    return newSearch

}


// const page = 1;
// const pageSize = 3;
// let idArray: string[] = [];
// let name = ""; 
// let searchby = updatedSearch.searchBy
// updatedSearch.isSearching = true;

// if(updatedSearch.searchBy === "Id"){
//     idArray = [updatedSearch.input]
// }else if (updatedSearch.searchBy === "Name"){
//     name = updatedSearch.input
// }