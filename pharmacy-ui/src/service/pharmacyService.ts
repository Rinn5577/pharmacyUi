import api from './api'
import { PharmacyModel } from '../models/redux-models'

export default{
    async getAllPharmacies(){
        var response=await api().get('pharmacies');
        return response.data;
    },
    async getParticularPharmacy(pharmacy_id:number){
        var response=await api().get('pharmacies');
        return response.data.filter((pharmacy:PharmacyModel)=>pharmacy.id===pharmacy_id)
    }
}