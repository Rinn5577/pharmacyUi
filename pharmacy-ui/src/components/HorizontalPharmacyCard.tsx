import React, { useEffect, useState } from "react";
import { PharmacyModel } from "../models/pharmacy";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { fetchFavoritePharmacyList, setTargetPharmacy } from "../store/pharmacy-actions";

//TODO:
//Switch favorite button to remove from favorites - (isFavorited somewhere in state?)
const HorizontalPharmacyCard = (pharmacy:PharmacyModel) => {

    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    const [faveDisable, setFaveDisable] = useState(false)

    const handleEditClick=(e: React.MouseEvent<HTMLButtonElement>, value: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        dispatch(setTargetPharmacy(targetPharmacy))
        navigate(`/${targetPharmacy.id.toString()}`)
    }

    const favoriteClickHandler = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
       
        //check if the key exists in local storage already 
        var allLocalStorage = JSON.stringify(localStorage) //returns localStorage as a string
        var allLocalAsObject = JSON.parse(allLocalStorage) //returns an object of localStorage w/ key:value pairs
        var arrayOfKeys = Object.keys(allLocalAsObject)//returns an array of keys from localStorage
        if(!arrayOfKeys.includes(id.toString())){
            localStorage.setItem(id.toString(), "")
        } console.log("nothing added, key already exists")

        setFaveDisable(true)

    }


    return(
        <>
        <div className="p-1">
            <div >
            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                    Pharmacy ID: {pharmacy.id}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</div>
                <p className="text-gray-700 text-base">{pharmacy.address}</p>
                <p className="text-gray-700 text-base">{pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}</p>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis consectetur bibendum. Praesent quis condimentum ante. Quisque dictum ipsum a diam scelerisque blandit.</p>

                </div>
                <div>
                    <button disabled={faveDisable} onClick={(e)=>favoriteClickHandler(e,pharmacy.id)} className="bg-nuvemGreen disabled:bg-gray-500 hover:bg-nuvemBlue hover:text-nuvemGreen text-nuvemBlue text-center py-2 px-4 rounded-full">
                    +Favorite
                    </button> 
                    <button onClick={(e)=>handleEditClick(e,pharmacy.id)} className="bg-nuvemBlue hover:bg-nuvemGreen hover:text-nuvemBlue text-white text-center ml-2 py-2 px-4 rounded-full">
                    Edit
                    </button> 
                </div>

            </div>
            </div>
        </div>
        </>
    )
}

export default HorizontalPharmacyCard;