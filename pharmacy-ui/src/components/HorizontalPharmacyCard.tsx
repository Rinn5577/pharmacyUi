import React from "react";
import { PharmacyModel } from "../models/pharmacy";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setPharmacy } from "../store/pharmacy-actions";


const HorizontalPharmacyCard = (pharmacy:PharmacyModel) => {

    const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
    const dispatch=useAppDispatch();
    const navigate = useNavigate();

    const handleEditClick=(e: React.MouseEvent<HTMLAnchorElement>, value: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        dispatch(setPharmacy(targetPharmacy))
        navigate('/updatePharmacy')
    }
    return(
        <>
        <div className="p-1">
            <div className=" w-full lg:max-w-full lg:flex">
            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                    Pharmacy ID: {pharmacy.id}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div>
                    <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full">
                    Info
                    </a> 
                    <a onClick={(e)=>handleEditClick(e,pharmacy.id)} className="bg-blue-500 hover:bg-blue-700 text-white text-center ml-2 py-2 px-4 rounded-full">
                    Edit
                    </a> 
                </div>

            </div>
            </div>
        </div>
        </>
    )
}

export default HorizontalPharmacyCard;