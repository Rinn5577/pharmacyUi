import React from "react";
import { Pharmacy } from "../../types/Pharmacy";
import PharmacyEntity from "../PharmacyEntity";

const SmallCard = (pharmacy: Pharmacy) => {
  return (
    <div className="mb-4 border border-gray-400  bg-white rounded p-4 flex flex-col justify-between leading-normal">
      <PharmacyEntity {...pharmacy}/>
    </div>
  );
};

export default SmallCard;
