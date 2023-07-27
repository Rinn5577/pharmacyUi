import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { PharmacyModel } from '../models/pharmacy'
import { setPharmacyFavoritesList } from '../store/pharmacy-actions';
import HorizontalPharmacyCard from '../components/HorizontalPharmacyCard';
import Pharmacies from './Pharmacies';

const Favorites = () => {

    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)
    const pharmacies=useAppSelector(state=>state.pharmacy.pharmacy_list)
    const dispatch=useAppDispatch();

    useEffect(() =>{
        if(favorites.length === 0){
            loadFaveArray()
        }
    }, [])

    //this loads the favorites stored in local to the state store 
    const loadFaveArray = () =>{
        //gets local storage 
        var allLocalStorage = JSON.stringify(localStorage) //all of local storage into a string
        var allLocalAsObject = JSON.parse(allLocalStorage) //an object with the favorites stored key: string of info
        var arrayOfKeys = Object.keys(allLocalAsObject) // pulls out just the keys so we dont have to know them ahead of time
        //placeholders
        var favoriteAsString = ""
        var favoriteAsObj = {} as PharmacyModel
        var favesFromLocal = [] as PharmacyModel[];
        //var theKey = 0
        arrayOfKeys.map((key)=>(

            favoriteAsString = JSON.stringify(localStorage.getItem(key)), //gets each favorite one by one
            favoriteAsObj = JSON.parse(JSON.parse(favoriteAsString)) as PharmacyModel, //parses strings into objects
            favesFromLocal.push(favoriteAsObj as PharmacyModel) //pushes to our placeholder array

            //to be used later
            //theKey = parseInt(key), //turns the key into a number
            //this isnt going to work because of the pagination. 
            //ill need to fetch the pharm from the api, set it somwhere in store and then access it there
            //favoriteAsObj = pharmacies.filter(pharm => pharm.id === theKey )[0], //finds the pharm with matching id

        ))
        dispatch(setPharmacyFavoritesList(favesFromLocal))
    }
 
    //validation
    const checkFavoritePharmacyList = () => {
        if(favorites.length === 0){
            return false
        } return true
    }


    return(
        <div>
            


<div>
            <div className=" ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="px-6 py-8">
                <h2>Your Favorites</h2>
                { checkFavoritePharmacyList() &&
                favorites.map((pharmacy) =>(
                    <div>
                        <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                    </div>
                ) )
            }
                </div>
            </div>
        </div>
        </div>

        
    )
}

export default Favorites;