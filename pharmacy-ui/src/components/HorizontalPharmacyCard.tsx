import React from "react";
import { PharmacyModel } from "../models/pharmacy";
import { useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { fetchPharmacy, setTargetPharmacy} from "../store/pharmacy-actions";
import { addToLocalStorage, getKeysFromLocalStorage } from "../utils/localStorage";

//TODO:
//Switch favorite button to remove from favorites - (isFavorited somewhere in state?)
const HorizontalPharmacyCard = (pharmacy:PharmacyModel) => {

    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list)


    const editClickHandler=(id: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === id)[0]
        dispatch(setTargetPharmacy(targetPharmacy))
        navigate(`/${pharmacy.id.toString()}`)
    }

    const favoriteClickHandler = ( id: number) => {
        addToLocalStorage(id)
    }

    const checkDisable = (id: number) => {
        var keys = getKeysFromLocalStorage()
        if(keys.includes(id.toString())){
            return true
        } return false
    }


    return(
            <div className=" my-4 border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                
                    <p className="text-sm text-gray-600 flex items-center">
                        Pharmacy ID: {pharmacy.id}
                    </p>
                    <p className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</p>
                    <p className="text-gray-700 text-base">{pharmacy.address}</p>
                    <p className="text-gray-700 text-base">{pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}</p>
                    <p className="text-gray-700 text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis consectetur bibendum. Praesent quis condimentum ante. Quisque dictum ipsum a diam scelerisque blandit.</p>
                
                <div>
                    <button disabled={checkDisable(pharmacy.id)} onClick={()=>favoriteClickHandler(pharmacy.id)} className="bg-nuvemGreen disabled:bg-gray-500 hover:bg-nuvemBlue hover:text-nuvemGreen text-nuvemBlue text-center py-2 px-4 rounded-full">
                    +Favorite
                    </button> 
                    <button onClick={()=>editClickHandler(pharmacy.id)} className="bg-nuvemBlue hover:bg-nuvemGreen hover:text-nuvemBlue text-white text-center ml-2 py-2 px-4 rounded-full">
                    Edit
                    </button> 
                </div>
            </div>
            
    )
}

export default HorizontalPharmacyCard;