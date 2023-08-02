import React from "react";
import { Pharmacy } from "./types/Pharmacy";

const SmallPharmacyCard = (pharmacy: Pharmacy) => {
  return (
    <div className="mb-4 border border-gray-400  bg-white rounded p-4 flex flex-col justify-between leading-normal">
      <p className="text-sm text-gray-600 flex items-center">
        Pharmacy ID: {pharmacy.id}
      </p>
      <p className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</p>
      <div className="text-gray-700 text-base">
        <p>{pharmacy.address}</p>
        <p>{pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}</p>
        <p>
          Appeal to the client, sue the vice president . I got your invoice...it
          seems really high, why did you charge so much can you make the logo
          bigger yes bigger bigger still the logo is too big im not sure, try
          something else.
        </p>
      </div>
    </div>
  );
};

export default SmallPharmacyCard;
