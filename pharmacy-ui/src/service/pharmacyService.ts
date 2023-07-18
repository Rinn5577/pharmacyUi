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
    //no idea if this is going to work yet, but i think this is what it will look like. need to do more research
    async updatePharmacy(pharmacy:PharmacyModel){
        //passes the pharmacy id and pharmacy object
        var response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    }
}


