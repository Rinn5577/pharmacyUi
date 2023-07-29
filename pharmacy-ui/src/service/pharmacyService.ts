import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'
import { urlFormatter } from '../utils/urlFormatter';

export default{
    // async getPharmacyList(pageNumber:number, pageSize:number){
    //     let num = pageNumber.toString();
    //     let size = pageSize.toString();
    //     let url = `?page=${num}&pageSize=${size}`;
    //     let response=await api().get(url);
    //     return response.data;
    // },
    // async getPharmacyById(pharmacy_id:number){
    //     let url = `?page=1&pageSize=3&ids=${pharmacy_id}`
    //     console.log(url)
    //     let response=await api().get(url);
    //     //let response=await api().get(pharmacy_id.toString());
    //     console.log(response.data)
    //     return response.data
    // },
    // async getPharmacyByName(pharmacy_name:string, pageNumber:number, pageSize:number){
    //     let num = pageNumber.toString();
    //     let size = pageSize.toString();
    //     let url = `?page=${num}&pageSize=${size}&name=${pharmacy_name}`
    //     let response=await api().get(url);
    //     return response.data
    // },
    async updatePharmacy(pharmacy:PharmacyModel){
        let response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    },

    // async getFavoritePharmacyByID(ids: Array<string>){
    //     let baseUrl = `?page=1&pageSize=3&`
    //     let newUrlArray = [];

    //     for (let i = 0; i < ids.length; i++) {
    //         const id = ids [i];
    //         let urlSegment = `ids=${id}&`
    //         newUrlArray.push(urlSegment)
    //     }

    //     let finalUrl = baseUrl + newUrlArray.join("")
    //     let response=await api().get(finalUrl);
    //     return response.data
    // }, 

    async getPharmacyListTest(page:number, page_size:number, ids?:Array<string>, name?:string){
        let url = urlFormatter(page, page_size, ids, name)
        let response = await api().get(url);
        return response.data
    }
}


