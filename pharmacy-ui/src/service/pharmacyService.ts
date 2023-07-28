import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'

export default{
    async getPharmacyList(pageNumber:number, pageSize:number){
        let num = pageNumber.toString();
        let size = pageSize.toString();
        let url = `?page=${num}&pageSize=${size}`;
        let response=await api().get(url);
        return response.data;
    },
    async getPharmacy(pharmacy_id:number){
        let response=await api().get(pharmacy_id.toString());
        return response.data
    },
    async getPharmacyByName(pharmacy_name:string, pageNumber:number, pageSize:number){
        let num = pageNumber.toString();
        let size = pageSize.toString();
        let url = `/byName/${pharmacy_name}?page=${num}&pageSize=${size}`
        let response=await api().get(url);
        return response.data
    },
    async updatePharmacy(pharmacy:PharmacyModel){
        let response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    },

    async getFavoritePharmacyByID(ids: Array<string>){
        let baseUrl = `/favorites?`
        let newUrlArray = [];

        for (let i = 0; i < ids.length; i++) {
            const id = ids [i];
            let urlSegment = `ids=${id}&`
            newUrlArray.push(urlSegment)
        }

        let finalUrl = baseUrl + newUrlArray.join("")
        let response=await api().get(finalUrl);
        return response.data
    }
}


