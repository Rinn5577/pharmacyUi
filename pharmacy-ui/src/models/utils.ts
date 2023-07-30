export interface ResponseModel{
    "code"?: string,
    "message": string,
    "response"?: any,
    "status"?: number,
    "show": boolean
}

export interface SearchParamsModel{
    "searchBy": string,
    "input": string,
    "isSearching": Boolean
}
export interface UtilsArrayModel{
    currentPage:number
    pharmacyResponse: ResponseModel
    searchParams: SearchParamsModel
}

