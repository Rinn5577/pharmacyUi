import api from './api'
import { PharmacyModel } from '../models/redux-models'

export default{
    async getAllPharmacies(){
        var response=await api().get("");
        return response.data;
    },
    async getParticularPharmacy(pharmacy_id:number){
        var response=await api().get(pharmacy_id.toString());
        return response.data
    }
}