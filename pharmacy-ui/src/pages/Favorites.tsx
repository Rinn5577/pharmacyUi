import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { PharmacyModel } from '../models/pharmacy'
import { setPharmacyFavoritesList } from '../store/pharmacy-actions';
import HorizontalPharmacyCard from '../components/HorizontalPharmacyCard';

const Favorites = () => {

    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)
    const dispatch=useAppDispatch();

    
    //this loads the favorites stored in local to the state store on page load
    useEffect(() =>{
        console.log("local storage")
        console.log(localStorage)
        if(favorites.length === 0){
            var arrayToDispatch = loadFaveArray()
            dispatch(setPharmacyFavoritesList(arrayToDispatch))
            console.log(favorites)
        }
    }, [])

     //an empty array i can store the results from local in, need to make this part of state 

    const loadFaveArray = () =>{
        //gets local storage 
        var allLocalStorage = JSON.stringify(localStorage) //all of local storage into a string
        var allLocalAsObject = JSON.parse(allLocalStorage) //an object with the favorites stored key: string of info
        var arrayOfKeys = Object.keys(allLocalAsObject) // pulls out just the keys so we dont have to know them ahead of time
        var favoriteAsString = ""
        var favoriteAsObj = {} as PharmacyModel
        var favesFromLocal = [] as PharmacyModel[];

        arrayOfKeys.map((key)=>(
            favoriteAsString = JSON.stringify(localStorage.getItem(key)), //gets each favorite one by one
            favoriteAsObj = JSON.parse(JSON.parse(favoriteAsString)) as PharmacyModel,
            //console.log("object pushing to FavesFromLocal:"),
            //console.log(favoriteAsObj),
            favesFromLocal.push(favoriteAsObj as PharmacyModel)

        ))
        return favesFromLocal
    }
 
    const checkFavoritePharmacyList = () => {
        if(favorites.length === 0){
            return false
        } return true
    }


    return(
        <div>
            Hello from favorites
            { checkFavoritePharmacyList() &&
                favorites.map((pharmacy) =>(
                    <div>
                        <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                    </div>
                ) )
            }
        </div>
    )
}

export default Favorites;