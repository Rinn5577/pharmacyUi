import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, fetchPharmacy } from '../store/pharmacy-actions';
import React from "react";
import UpdateForm from "./UpdateForm";
import Search from "./Search";
import PharmacyView from "./PharmacyView";

const Pharmacy=()=>{
    // const dispatch=useAppDispatch();
    // const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    // const clickHandler=()=>[
    //     dispatch(fetchPharmacyList())
    // ]

    // const checkPharmacyList=():boolean=>{
    //     if(pharmacyList.length==0){
    //         return false
    //     }
    //     return true
    // }


    return(
        <>
        <PharmacyView></PharmacyView>
        {/* <Search></Search> */}

        {/* <div>
            <Button variant="outlined" onClick={clickHandler} >All Pharmacies</Button>
            <div>
                <h3>Pharmacy List: </h3>
                <div className="pharmacy-container">
                    <p className="pharmacy-child1">ID</p>
                    <p className="pharmacy-child2">NAME</p>
                    <p className="pharmacy-child3">CREATED</p>
                </div>
                {checkPharmacyList() &&
                    pharmacyList.map((pharmacy)=>(
                        <div className="pharmacy-container" key={pharmacy.id}>
                        <p className="pharmacy-child1">{pharmacy.id}</p>
                        <p className="pharmacy-child2">{pharmacy.name}</p>
                        <p className="pharmacy-child3">{pharmacy.filledPrescriptionsMonthToDate}</p>
                        <p className="pharmacy-child4">{pharmacy.createdAt}</p>

                        </div>
                    ))
                }
            </div>
        </div> */}
        {/* <div>
            <UpdateForm></UpdateForm>
        </div> */}
        </>

    )
}

export default Pharmacy;