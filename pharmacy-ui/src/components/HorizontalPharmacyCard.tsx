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
        var favoritePharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0] //checked, fine
        var currentFavorites = favorites.concat([]) //concat merges array, returns a new one, without this array is read only
        currentFavorites.push(favoritePharmacy) //working
        dispatch(setPharmacyFavoritesList(currentFavorites)) //working
    }

    //this listens to the favorites array and when it is updated it adds the last added favorite to the
    //local storage
    useEffect(() =>{
        if(favorites.length > 0){
            var favoriteKey = (favorites[favorites.length-1]?.id.toString())
            //check if the key exists in local storage already 
            var allLocalStorage = JSON.stringify(localStorage) //all of local storage into a string
            var allLocalAsObject = JSON.parse(allLocalStorage) 
            var arrayOfKeys = Object.keys(allLocalAsObject)//array of keys in local storage
            if(!arrayOfKeys.includes(favoriteKey)){
                localStorage.setItem(favoriteKey, JSON.stringify(favorites[favorites.length-1]))
            } console.log("nothing added, key already exists")
            
        }
        console.log("from H card fave store state")
        console.log(favorites)
        console.log("local storage")
        console.log(localStorage)

    },[favorites])


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