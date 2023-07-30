import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useAppSelector } from "../hooks/redux-hooks";
import SmallPharmacyCard from "../components/SmallPharmacyCard";
import Toast from "../components/Toast";


const UpdatePharmacy = () => {
    const targetedPharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

    return(
        <>
                <Toast></Toast>
            <div className=" ml-80 my-6 max-w-4xl  pr-6 pt-10 rounded flex flex-row mt-6 overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="w-full max-w-lg mx-6">
                <SmallPharmacyCard {...targetedPharmacy}></SmallPharmacyCard>
                </div>
                <UpdateForm></UpdateForm>
            </div>
        </>

    )
}

export default UpdatePharmacy;