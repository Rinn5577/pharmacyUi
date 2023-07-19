
export interface ErrorModel{
    "code"?: string,
    "message": string,
    "response"?: any,
    "status"?: number
}

export interface UtilsArrayModel{
    viewAll:Boolean
    currentPage:number
    pharmacyError: ErrorModel
}

