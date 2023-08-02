import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import LargePharmacyCard from "./LargeCard";

const PharmacyContainer = () => {
  const pharmacyList = useAppSelector((state) => state.pharmacy.pharmacy_list);

  const checkPharmacyList = () => {
    if (pharmacyList.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div className="pt-3">
      {checkPharmacyList() &&
        pharmacyList.map((pharmacy) => (
          <div key={pharmacy.id}>
            <LargePharmacyCard {...pharmacy} />
          </div>
        ))}
    </div>
  );
};

export default PharmacyContainer;
