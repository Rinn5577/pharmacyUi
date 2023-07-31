import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'
import { urlFormatter } from '../utils/urlFormatter';
import { SearchParamsModel } from '../models/utils';


export default{

    async getPharmacyList(page:number, searchParams:SearchParamsModel){
        console.log(searchParams)
        let url = urlFormatter(page, searchParams.searchBy, searchParams.idArray, searchParams.name)
        console.log(url)
        let response = await api().get(url);
        return response.data
    },
    async updatePharmacy(pharmacy:PharmacyModel){
        let response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    }


}


