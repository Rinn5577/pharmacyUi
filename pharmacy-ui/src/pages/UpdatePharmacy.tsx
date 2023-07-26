import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useAppSelector } from "../hooks/redux-hooks";
import SmallPharmacyCard from "../components/SmallPharmacyCard";

const UpdatePharmacy = () => {
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

    return(
        <>

            <div className="flex flex-row mt-24 ml-48">
                <div className="w-full max-w-lg mr-6">
                <SmallPharmacyCard {...pharmacy}></SmallPharmacyCard>
                </div>
                <div >
                <UpdateForm></UpdateForm>
                </div>

            </div>


        </>
    )
}

export default UpdatePharmacy;