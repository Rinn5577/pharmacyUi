import React from "react";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import PharmacyList from "../components/PharmacyList";
import { useAppDispatch} from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/pharmacy-actions";
import { resetSearchParams, setCurrentPage} from '../store/utils-actions';


const Pharmacies = () =>{

    const dispatch=useAppDispatch();

    const clickHandler=()=>[
        dispatch(resetSearchParams()),
        dispatch(fetchPharmacyList(1,3)),
        dispatch(setCurrentPage(1))
    ]

    return(
            <div className=" pb-6 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="px-6 py-8 mb-0">
                    <div className="flex justify-between">
                    <Search></Search>
                        <div className="self-end">
                            <button onClick={clickHandler} className=" bg-nuvemBlue hover:bg-nuvemGreen text-white hover:text-nuvemBlue text-center py-2 px-4 rounded-full">
                            View All
                            </button> 
                        </div>
                    
                    </div>
                    <PharmacyList></PharmacyList>
                </div>
                <Pagination></Pagination>
            </div>
    )
}

export default Pharmacies