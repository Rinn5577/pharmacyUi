export const urlFormatter = (page:number, search_by:string, ids?:Array<string>, name?:string) =>{
    let baseUrl = `?page=${page}`
    if(search_by === "Id" && ids !== undefined){
        let newUrlArray = [];
        for (const id of ids) {
            let urlSegment = `&ids=${id}`
            newUrlArray.push(urlSegment)
        }
        return baseUrl + newUrlArray.join("")
    } else if (search_by === "Name" && name !== undefined){
        return baseUrl+`&name=${name}`
    }else 
        return baseUrl;
    
}
//Example URLs
//get all 
//'https://localhost:7128/api/Pharmacy?page=1&pageSize=3'

//get by id
//'https://localhost:7128/api/Pharmacy?page=1&pageSize=3&ids=3&ids=4

//get by name 
//'https://localhost:7128/api/Pharmacy?page=1&pageSize=3&name=cvs'