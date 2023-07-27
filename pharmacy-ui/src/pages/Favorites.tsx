import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { fetchFavoritePharmacyList } from '../store/pharmacy-actions';
import HorizontalPharmacyCard from '../components/HorizontalPharmacyCard';

const Favorites = () => {

    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)
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
        dispatch(fetchFavoritePharmacyList(arrayOfKeys))

    }
 
    const checkFavoritePharmacyList = () => {
        if(favorites.length === 0){
            return false
        } return true
    }


    return(
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
    )
}

export default Favorites;