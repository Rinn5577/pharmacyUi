import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useAppSelector } from "../hooks/redux-hooks";
import SmallPharmacyCard from "../components/SmallPharmacyCard";
import { useNavigate } from "react-router";

const UpdatePharmacy = () => {
    const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
    const navigate = useNavigate();

    const cancleClickHandler = () =>{
        navigate(-1)
    }
    return(
        <div className=" ml-80 my-6 max-w-4xl  pr-6 pt-10 rounded flex flex-row mt-6 overflow-hidden shadow-xl border-solid border-2 border-nuvemGreen">
                <div className="w-full max-w-lg mx-6">
                <SmallPharmacyCard {...pharmacy}></SmallPharmacyCard>
                <button onClick={cancleClickHandler} className="bg-nuvemBlue hover:bg-nuvemGreen hover:text-nuvemBlue text-white text-center mb-2 py-2 px-4 rounded-full">
                    Cancel
                </button>
                </div>
                <UpdateForm></UpdateForm>
        </div>
    )
}

export default UpdatePharmacy;