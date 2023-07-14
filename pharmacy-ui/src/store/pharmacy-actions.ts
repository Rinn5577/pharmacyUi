import pharmacySlice from "./pharmacy-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "./index"
import { PharmacyModel } from '../models/pharmacy';
import PharmacyService from "../service/pharmacyService"


export const pharmacyActions=pharmacySlice.actions

export const fetchPharmacyList=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().pharmacy.pharmacy_list.length===0){
            const response:PharmacyModel[]=await PharmacyService.getPharmacyList();
            dispatch(pharmacyActions.setPharmacyList(response))
        }
    }
}

export const fetchPharmacy=(pharmacy_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:PharmacyModel=await PharmacyService.getPharmacy(pharmacy_id);
        dispatch(pharmacyActions.setPharmacy(response))
    }
}


//im 99% sure this is incorrect. i dont think i should be using dispatch. maybe something about saving changes, need to research 
// export const postPharmacyUpdate=(pharmacy:PharmacyModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
//     return async(dispatch,getState)=>{
//         const response:PharmacyModel=await PharmacyService.updatePharmacy(pharmacy);
//         dispatch(pharmacyActions.setParticularPharmacy(response))
//     }
// }



///lookinto pre-fetch 