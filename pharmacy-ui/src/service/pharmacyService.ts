import api from './api'
import { PharmacyModel } from '../models/redux-models'


export default{
    async getAllPharmacies(){
        var response=await api().get("");
        console.log(response.data)
        return response.data;
    },
    async getParticularPharmacy(pharmacy_id:number){
        var response=await api().get(pharmacy_id.toString());
        return response.data
    },
    //no idea if this is going to work yet, but i think this is what it will look like. need to do more research
    async updatePharmacy(pharmacy:PharmacyModel){
        var response=await api().put(pharmacy.id.toString());
        return response
    }
}