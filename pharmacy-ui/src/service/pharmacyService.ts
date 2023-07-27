import api from './pharmacyApi'
import { PharmacyModel } from '../models/pharmacy'
import { List } from 'postcss/lib/list';


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
    async getPharmacyByName(pharmacy_name:string, pageNumber:number, pageSize:number){
        var num = pageNumber.toString();
        var size = pageSize.toString();
        var url = `/byName/${pharmacy_name}?page=${num}&pageSize=${size}`
        var response=await api().get(url);
        return response.data
    },
    async updatePharmacy(pharmacy:PharmacyModel){
        var response=await api().put(pharmacy.id.toString(), pharmacy);
        return response.data
    },


    //this is grabbing the last in the favorite list, im just not passing the url correctly
    //need to figure out how to iterate over the array and construc tthe url
    async getFavoritePharmacyByID(ids: Array<string>){
        var baseUrl = `/favorites?`
         var newURLArray = [];

        for (let i = 0; i < ids.length; i++) {
            const id = ids [i];
            let urlSegment = `ids=${id}&`
            newURLArray.push(urlSegment)
        }

        var finalUrl = baseUrl + newURLArray.join("")
        console.log(finalUrl)

        var response=await api().get(finalUrl);
        console.log(response.data)
        return response.data
    }
}


