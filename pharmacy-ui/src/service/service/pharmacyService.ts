import api from "../api/pharmacyApi";
import { urlFormatter } from "../../store/utils/urlFormatter";
import { SearchParams } from "../../components/Search/types/searchParams";
import { Pharmacy } from "../../components/Pharmacy/types/Pharmacy";

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
