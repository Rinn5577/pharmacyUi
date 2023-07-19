import React, { useEffect } from "react";
import { PharmacyModel } from "../models/pharmacy";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setPharmacyFavoritesList, setTargetPharmacy } from "../store/pharmacy-actions";


const HorizontalPharmacyCard = (pharmacy:PharmacyModel) => {


    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)

    const dispatch=useAppDispatch();
    const navigate = useNavigate();

    const handleEditClick=(e: React.MouseEvent<HTMLButtonElement>, value: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        dispatch(setTargetPharmacy(targetPharmacy))
        navigate('/updatePharmacy')
    }

    //something is happening where undefined is returned when favoriting from search view 
    const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, value: number) =>{
        var favoritePharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        var currentFavorites = favorites.concat([]) //concat merges array, returns a new one, without this array is read only
        currentFavorites.push(favoritePharmacy)
        dispatch(setPharmacyFavoritesList(currentFavorites))

    }

    return(
        <>
        <div className="p-1">
            <div className=" w-full lg:max-w-full lg:flex">
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
                    <button onClick={(e)=>handleFavoriteClick(e,pharmacy.id)} className="bg-nuvemGreen hover:bg-nuvemBlue hover:text-nuvemGreen text-nuvemBlue text-center py-2 px-4 rounded-full">
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