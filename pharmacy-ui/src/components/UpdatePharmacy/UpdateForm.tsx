import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { postPharmacyUpdate } from "../../store/actions/pharmacy-actions";
import Button from "../Button";
import FormInput from "../Form/FormInput";
import Selector from "../Form/Selector";
import stateOptions from "./utils/stateOptions";

const UpdateForm = () => {
  const pharmacy = useAppSelector((state) => state.pharmacy.pharmacy);
  const [pharmacyChanges, setPharmacyChanges] = useState(pharmacy);
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<any>) => {
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
      <form className="w-full max-w-lg flex flex-wrap  mb-6 w-full px-3">
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

        <div className="flex flex-row -mx-3 ">
          <div className="w-full md:w-1/3 px-3 ">
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

          <div>
            <Selector
              onChange={changeHandler}
              name="state"
              value={pharmacyChanges.state.toUpperCase()}
              optionValue={stateOptions}
            >
              State
            </Selector>
          </div>

          <div className=" md:w-1/3 px-3">
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
        <Button onClick={(e) => submitHandler(e)} variant="primary" size="lg">
          Submit
        </Button>
      </form>
    </>
  );
};

export default UpdateForm;
