import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacyList, fetchPharmacy } from '../store/pharmacy-actions';
import { useState } from "react";
import React from "react";
import './Pharmacy.css'

const Pharmacy=()=>{
    const [pharmacy_id,setPharmacy_id]=useState(1);
    const dispatch=useAppDispatch();
    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
    const clickHandler=()=>[
        dispatch(fetchPharmacyList())
    ]
    const searchHandler=()=>{
        dispatch(fetchPharmacy(pharmacy_id))
    }
    const checkPharmacyList=():boolean=>{
        if(pharmacyList.length==0){
            return false
        }
        return true
    }
    const checkPharmacy=():boolean=>{
        if(pharmacy.id===0){
            return false
        }
        return true
    }

    return(
        <>
        <div>
            <label>Enter pharmacy id: </label>
            <input onChange={(event)=>setPharmacy_id(parseInt(event.target.value))} type="number"></input>
            <button onClick={searchHandler}>Find</button>
            <div>
                <h3>Particular Pharmacy</h3>
                {
                    checkPharmacy() && 
                    (<div className="pharmacy-container" key={pharmacy.id}>
                        <p className="pharmacy-child1">{pharmacy.id}</p>
                        <p className="pharmacy-child2">{pharmacy.name}</p>
                        <p className="pharmacy-child3">{pharmacy.filledPrescriptionsMonthToDate}</p>
                        <p className="pharmacy-child4">{pharmacy.createdAt}</p>
                        </div>)
                }
            </div>
        </div>
        <div>
            <button onClick={clickHandler}>All Pharmacies</button>
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
                            <p className="pharmacy-child1"></p>
                            <p className="pharmacy-child2"></p>
                            <p className="pharmacy-child3"></p>
                        </div>
                    ))
                }
            </div>
        </div>
        </>

    )
}

export default Pharmacy;