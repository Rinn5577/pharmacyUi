import api from "../api/pharmacyApi";
import { urlFormatter } from "../../utils/urlFormatter";
import { SearchParams } from "../../types/searchParams";
import { Pharmacy } from "../../types/Pharmacy";

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
