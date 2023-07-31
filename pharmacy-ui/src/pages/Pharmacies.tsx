import React from "react";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import PharmacyList from "../components/PharmacyList";
import { useAppDispatch} from "../hooks/redux-hooks";
import { fetchPharmacyList } from "../store/pharmacy-actions";
import { resetSearchParams, setCurrentPage} from '../store/utils-actions';
import Button from "../components/Button";
import { SearchParamsModel } from "../models/utils";
import NotificationBanner from "../components/NotificationBanner";

const Pharmacies = () =>{
    const dispatch=useAppDispatch();

    const clickHandler = () =>{
        const defaultSearch = {} as SearchParamsModel;
        dispatch(resetSearchParams())
        dispatch(setCurrentPage(1))
        dispatch(fetchPharmacyList(1,defaultSearch))
    }

    return(
        <>
        <NotificationBanner></NotificationBanner>
                    <div className=" pb-6 ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="px-6 pt-6">
                    <div className="flex justify-between">
                    <Search></Search>
                        <div className="self-end">
                            <Button onClick={clickHandler} variant="default" size="lg">View All</Button>
                        </div>       
                    </div>
                    <PharmacyList></PharmacyList>
                </div>
                <Pagination></Pagination>
            </div>
        </>

    )
}

export default Pharmacies