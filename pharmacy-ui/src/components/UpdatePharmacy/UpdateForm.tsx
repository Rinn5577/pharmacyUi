import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { postPharmacyUpdate } from "../../store/actions/pharmacy-actions";
import Button from "../Button";
import FormInput from "../Form/FormInput";

const UpdateForm = () => {
  const pharmacy = useAppSelector((state) => state.pharmacy.pharmacy);
  const [pharmacyChanges, setPharmacyChanges] = useState(pharmacy);
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPharmacyChanges({
      ...pharmacyChanges,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(postPharmacyUpdate(pharmacyChanges));
  };

  return (
    <>
      <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6 w-full px-3">
        <FormInput
          onChange={changeHandler}
          name={"name"}
          value={pharmacyChanges.name}
          placeholder={pharmacy.name}
          variant="text"
        >
          Pharmacy Name
        </FormInput>

        <FormInput
          onChange={changeHandler}
          name={"address"}
          value={pharmacyChanges.address}
          placeholder={pharmacy.address}
          variant="text"
        >
          Street Address
        </FormInput>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormInput
              onChange={changeHandler}
              name={"city"}
              value={pharmacyChanges.city}
              placeholder={pharmacy.city}
              variant="text"
            >
              City
            </FormInput>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormInput
              onChange={changeHandler}
              name={"state"}
              value={pharmacyChanges.state.toUpperCase()}
              placeholder={pharmacy.state.toUpperCase()}
              variant="text"
            >
              State
            </FormInput>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormInput
              onChange={changeHandler}
              name={"zipcode"}
              value={pharmacyChanges.zipcode}
              placeholder={pharmacy.zipcode}
              variant="text"
            >
              Zipcode
            </FormInput>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={(e) => submitHandler(e)} variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
