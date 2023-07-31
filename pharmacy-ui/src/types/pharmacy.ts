export type Pharmacy = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  filledPrescriptionsMonthToDate: number;
  createdAt: string;
  updatedAt: string;
}
export type PharmacyStateArray = {
  pharmacy_list: Pharmacy[];
  pharmacy: Pharmacy;
}
