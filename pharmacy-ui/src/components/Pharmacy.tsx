import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import { fetchPharmacies, fetchParticularPharmacy } from "../store/pharmacy-actions";
import { useState } from "react";
import './Pharmacy.css'

const Pharmacy=()=>{
    const [pharmacy_id,setPharmacy_id]=useState(1);
    const dispatch=useAppDispatch();
    const allpharmacies=useAppSelector(state=>state.pharmacy.all_pharmacies);
    const particularPharmacy=useAppSelector(state=>state.pharmacy.particular_pharmacy)
    const clickHandler=()=>[
        dispatch(fetchPharmacies())
    ]
    const searchHandler=()=>{
        dispatch(fetchParticularPharmacy(pharmacy_id))
    }
    const checkPharmacy=():boolean=>{
        if(allpharmacies.length==0){
            return false
        }
        return true
    }
    const checkPArticularPharmacy=():boolean=>{
        if(particularPharmacy.id===0){
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
                    checkPArticularPharmacy() && 
                    (<div className="pharmacy-container" key={particularPharmacy.id}>
                        <p className="pharmacy-child1">{particularPharmacy.id}</p>
                        <p className="pharmacy-child2">{particularPharmacy.name}</p>
                        <p className="pharmacy-child3">{particularPharmacy.filledPrescriptionsMonthToDate}</p>
                        <p className="pharmacy-child4">{particularPharmacy.createdAt}</p>
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
                {checkPharmacy() &&
                    allpharmacies.map((pharmacy)=>(
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