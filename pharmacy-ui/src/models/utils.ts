export interface ErrorModel{
    "code"?: string,
    "message": string,
    "response"?: any,
    "status"?: number
}

export interface SearchParamsModel{
    "searchBy": string,
    "input": string,
    "isSearching": Boolean
}
export interface UtilsArrayModel{
    currentPage:number
    pharmacyError: ErrorModel
    searchParams: SearchParamsModel
}

