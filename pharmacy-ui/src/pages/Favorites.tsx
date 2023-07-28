import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { fetchFavoritePharmacyList } from '../store/pharmacy-actions';
import HorizontalPharmacyCard from '../components/HorizontalPharmacyCard';
import { getKeysFromLocalStorage } from '../utils/localStorage';
const Favorites = () => {

    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)
    const dispatch=useAppDispatch();

    useEffect(() =>{
        loadFavoritePharmacyList()
    }, [])

    const loadFavoritePharmacyList = () =>{
        let keys = getKeysFromLocalStorage()
        dispatch(fetchFavoritePharmacyList(keys))
    }
 
    const checkFavoritePharmacyList = () => {
        if(favorites.length === 0){
            return false
        } return true
    }

    return(
            <div className=" px-6 py-8 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <h2>Your Favorites</h2>
                { checkFavoritePharmacyList() &&
                    favorites.map((pharmacy) =>(
                            <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                    ))
                }
            </div>
    )
}

export default Favorites;