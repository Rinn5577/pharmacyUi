import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"
import { AxiosError } from 'axios';
import { utilsReducers } from "./utils-actions";

export const pharmacyReducers=pharmacySlice.actions

const createErrorObj = (err:AxiosError)=>{
    let tempError = {
        "code": err.code,
        "message": err.message,
        "response": err.response?.data,
        "status": err.response?.status
    }
    return tempError;
}

// export const fetchPharmacyList=(pageNumber:number, pageSize:number):ThunkAction<void,RootState,unknown,AnyAction>=>{

//     return async(dispatch)=>{
//         try {
//             const response:PharmacyModel[]=await PharmacyService.getPharmacyList(pageNumber,pageSize);
//             dispatch(pharmacyReducers.setPharmacyList(response))
//             dispatch(utilsReducers.resetPharmacyError())
//         } catch (_err) {
//             let err =(_err as AxiosError)
//             const newError = createErrorObj(err)
//             dispatch(utilsReducers.setPharmacyError(newError))
//         }
//     }
// }

export const fetchPharmacyListTest=(page:number, page_size:number, ids?:Array<string>, name?:string):ThunkAction<void,RootState,unknown,AnyAction>=>{

    return async(dispatch)=>{
        try {
            const response:PharmacyModel[]=await PharmacyService.getPharmacyListTest(page, page_size,ids,name);
            dispatch(pharmacyReducers.setPharmacyList(response))
        } catch (error) {
            
        }
    }
}

// export const fetchPharmacyById=(pharmacy_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    
//     return async(dispatch)=>{
//         try {
//                 const response:PharmacyModel[]=await PharmacyService.getPharmacyById(pharmacy_id);
//                 dispatch(pharmacyReducers.setPharmacyList(response))
//                 // const newArray:PharmacyModel[] = [];
//                 // newArray.push(response)
//                 // dispatch(pharmacyReducers.setPharmacy(response))
//                 // dispatch(pharmacyReducers.setPharmacyList(newArray))
//                 dispatch(utilsReducers.resetPharmacyError())

//         } catch (_err) {
//             let err =(_err as AxiosError)
//             const newError = createErrorObj(err)
//             dispatch(utilsReducers.setPharmacyError(newError))

//         }
//     }
// }

// export const fetchFavoritePharmacyList=(ids: Array<string>):ThunkAction<void, RootState, unknown,AnyAction>=>{
//     return async(dispatch)=>{
//             const response:PharmacyModel[]=await PharmacyService.getFavoritePharmacyByID(ids)
//             console.log(response)
//             dispatch(pharmacyReducers.setPharmacyList(response))
//     }
// }

// export const fetchPharmacyByName=(pharmacy_name:string, pageNumber:number, pageSize:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    
//     return async(dispatch)=>{
//         try {
//                 const response:PharmacyModel[]=await PharmacyService.getPharmacyByName(pharmacy_name, pageNumber, pageSize);
//                 dispatch(pharmacyReducers.setPharmacyList(response))
//                 dispatch(utilsReducers.resetPharmacyError())

//         } catch (_err) {
//             let err =(_err as AxiosError)
//             const newError = createErrorObj(err)
//             dispatch(utilsReducers.setPharmacyError(newError))
//         }
//     }
// }

export const setTargetPharmacy=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        dispatch(pharmacyReducers.setPharmacy(pharmacy))
    }
}

export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
        try {
            const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
            dispatch(pharmacyReducers.setPharmacy(response))
            dispatch(utilsReducers.resetPharmacyError())
        } catch (_err) {
            let err =(_err as AxiosError)
            const newError = createErrorObj(err)
            dispatch(utilsReducers.setPharmacyError(newError))
        }
    }
}


