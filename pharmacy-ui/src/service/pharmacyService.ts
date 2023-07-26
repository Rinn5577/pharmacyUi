import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'


export default{
    async getPharmacyList(pageNumber:number, pageSize:number){
        var num = pageNumber.toString();
        var size = pageSize.toString();
        var url = `?page=${num}&pageSize=${size}`;
        var response=await api().get(url);
        return response.data;
    },
    async getPharmacy(pharmacy_id:number){
        var response=await api().get(pharmacy_id.toString());
        return response.data
    },
    async getPharmacyByName(pharmacy_name:string){
        var url = `/byName/${pharmacy_name}`
        var response=await api().get(url);
        return response.data
    },
    async updatePharmacy(pharmacy:PharmacyModel){
        var response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    }
}


