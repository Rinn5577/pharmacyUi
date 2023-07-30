import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'
import { urlFormatter } from '../utils/urlFormatter';


export default{


    async getPharmacyList(page:number, page_size:number, search_by:string, ids?:Array<string>, name?:string){
        let url = urlFormatter(page, page_size, search_by,ids, name)
        console.log(url)
        let response = await api().get(url);
        return response.data
    },
    async updatePharmacy(pharmacy:PharmacyModel){
        let response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    }


}


