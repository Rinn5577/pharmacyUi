import React from "react";
import { Pharmacy } from "../types/Pharmacy";

const PharmacyEntity = (pharmacy:Pharmacy) => {
  return (
    <>
      <p className="text-sm text-gray-600 flex items-center">
        Pharmacy ID: {pharmacy.id}
      </p>
      <p className="text-gray-900 font-bold text-xl mb-2">{pharmacy.name}</p>
      <p className="text-gray-700 text-base">{pharmacy.address}</p>
      <p className="text-gray-700 text-base">
        {pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode}
      </p>
      <p className="text-gray-700 text-base mb-6">
        Appeal to the client, sue the vice president . I got your invoice...it
        seems really high, why did you charge so much can you make the logo
        bigger yes bigger bigger still the logo is too big im not sure, try
        something else.
      </p>
    </>
  );
};

export default PharmacyEntity;
