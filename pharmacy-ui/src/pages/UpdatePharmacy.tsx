import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useAppSelector } from "../hooks/redux-hooks";
import SmallPharmacyCard from "../components/SmallPharmacyCard";

const UpdatePharmacy = () => {
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

    return(
        <div className=" ml-80 my-6 max-w-4xl rounded overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">

            <div className="flex flex-row mt-6 ">
                <div className="w-full max-w-lg mx-6 mt-10">
                <SmallPharmacyCard {...pharmacy}></SmallPharmacyCard>
                </div>
                <div className="mx-6 mb-6">
                <UpdateForm></UpdateForm>
                </div>

            </div>


        </div>
    )
}

export default UpdatePharmacy;