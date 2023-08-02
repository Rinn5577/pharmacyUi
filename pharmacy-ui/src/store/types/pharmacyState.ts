// export type Pharmacy = {
//   id: number;
//   name: string;
//   address: string;
//   city: string;
//   state: string;
//   zipcode: string;
//   filledPrescriptionsMonthToDate: number;
//   createdAt: string;
//   updatedAt: string;


// }
import { Pharmacy } from "../../components/Pharmacy/types/Pharmacy";

export type PharmacyStateArray = {
  pharmacy_list: Pharmacy[];
  pharmacy: Pharmacy;
}
