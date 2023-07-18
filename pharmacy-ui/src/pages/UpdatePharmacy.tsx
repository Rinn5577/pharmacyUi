import React from "react";
import UpdateForm from "../components/UpdateForm";
import Pharmacy from "../components/Pharmacy";
import { useAppSelector } from "../hooks/redux-hooks";
import HorizontalPharmacyCard from "../components/HorizontalPharmacyCard";

const UpdatePharmacy = () => {
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

    return(
        <>
            <div>

                <h3>Current Pharmacy Information</h3>
     
                <div>
                    <HorizontalPharmacyCard {...pharmacy}></HorizontalPharmacyCard>
                    {/* <Pharmacy {...pharmacy}></Pharmacy> */}
                </div>
                <div>
                    <UpdateForm></UpdateForm>
                </div>

            </div>


        </>
    )
}

export default UpdatePharmacy;