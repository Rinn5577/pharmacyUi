export interface ErrorModel{
    "code"?: string,
    "message": string,
    "response"?: any,
    "status"?: number
}

export interface UtilsArrayModel{
    currentPage:number
    pharmacyError: ErrorModel
}

