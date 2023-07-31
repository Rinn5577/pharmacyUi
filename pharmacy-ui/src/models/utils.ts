export interface ResponseModel{
    "code"?: string,
    "message": string,
    "response"?: any,
    "status"?: number,
    "show": boolean
}

export interface SearchParamsModel{
    "searchBy": string,
    "input"?: string,
    "name": string,
    "idArray": string[],
}

export interface UtilsArrayModel{
    currentPage:number
    pharmacyResponse: ResponseModel
    searchParams: SearchParamsModel
}

