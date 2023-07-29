export interface PharmacyModel{
    "id": number,
    "name": string,
    "address": string,
    "city": string,
    "state": string,
    "zipcode": string,
    "filledPrescriptionsMonthToDate": number,
    "createdAt": string,
    "updatedAt": string
}
export interface PharmacyArrayModel{
    pharmacy_list:PharmacyModel[],
    pharmacy:PharmacyModel
}

