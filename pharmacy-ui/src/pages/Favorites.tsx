import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { fetchPharmacyList } from '../store/pharmacy-actions';
import HorizontalPharmacyCard from '../components/HorizontalPharmacyCard';
import { getKeysFromLocalStorage } from '../utils/localStorage';
import Pagination from '../components/Pagination';
import Toast from '../components/Toast';


const Favorites = () => {

    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_list)
    const dispatch=useAppDispatch();
    let keys = getKeysFromLocalStorage()

    useEffect(() =>{
        loadFavoritePharmacyList()
    }, [])

    const loadFavoritePharmacyList = () =>{
        if(keys.length > 0){
            dispatch(fetchPharmacyList(1,3,"Id",keys))
        }
    }
 
    const checkFavoritePharmacyList = () => {
        if(keys.length === 0){
            return false
        } return true
    }

    return(
        <>
            <Toast></Toast>
                    <div className=" px-6 py-8 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <h2>Your Favorites</h2>
                { checkFavoritePharmacyList() ? 
                (
                    <div>
                    { favorites.map((pharmacy) =>(
                         <div key={pharmacy.id}>
                             <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                         </div>
                     ))}
                     </div>
                ):
                (
                    <p>Select up to 3 favorite pharmacies!</p>
                )

                }
                
            </div>
        </>

    )
}

export default Favorites;