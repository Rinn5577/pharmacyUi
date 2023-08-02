import api from "./pharmacyApi";
import { Pharmacy } from "../types/pharmacy";
import { urlFormatter } from "../utils/urlFormatter";
import { SearchParams } from "../types/utils";

export default {
  async getPharmacyList(page: number, searchParams: SearchParams) {
    let url = urlFormatter(page, searchParams);
    let response = await api().get(url);
    return response.data;
  },
  async updatePharmacy(pharmacy: Pharmacy) {
    let response = await api().put(pharmacy.id.toString(), pharmacy);
    return response.data;
  },
};
