import React from "react";
import { PharmacyModel } from "../models/pharmacy";

const SmallPharmacyCard = (pharmacy:PharmacyModel) =>{
    return(
        <div>
            
            <div className=" ">
            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                    Pharmacy ID: {pharmacy.id}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</div>
                <p className="text-gray-700 text-base">{pharmacy.address}</p>
                <p className="text-gray-700 text-base">{pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}</p>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis consectetur bibendum. Praesent quis condimentum ante. Quisque dictum ipsum a diam scelerisque blandit.</p>

                </div>

            </div>
            </div>
        </div>
        
    )
}

export default SmallPharmacyCard;