import React from "react";
import { PharmacyModel } from "../models/pharmacy";

const SmallPharmacyCard = (pharmacy:PharmacyModel) =>{
    return(     
            <div className="mb-8 border border-gray-400  bg-white rounded p-4 flex flex-col justify-between leading-normal">
                <p className="text-sm text-gray-600 flex items-center">Pharmacy ID: {pharmacy.id}</p>
                <p className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</p>
                <div className="text-gray-700 text-base">
                <p>{pharmacy.address}</p>
                <p>{pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis consectetur bibendum. Praesent quis condimentum ante. Quisque dictum ipsum a diam scelerisque blandit.</p>
                </div>
            </div>
        
    )
}

export default SmallPharmacyCard;