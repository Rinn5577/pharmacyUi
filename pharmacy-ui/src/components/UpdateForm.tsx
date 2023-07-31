import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { postPharmacyUpdate } from '../store/pharmacy-actions';
import Button from "./Button";

const UpdateForm=()=>{

const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
const [pharmacyChanges, setPharmacyChanges] = useState(pharmacy)
const dispatch=useAppDispatch();

const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPharmacyChanges({...pharmacyChanges,[event.target.name] : event.target.value})
}

const submitHandler = (event: React.MouseEvent) =>{
    event.preventDefault();
    dispatch(postPharmacyUpdate(pharmacyChanges))
}
 
    return(
        <>
            <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6 w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Pharmacy Name
                    </label>
                    <input  onChange={(e) => changeHandler(e)} name="name" value={pharmacyChanges.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder={pharmacy.name}/>
                   
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Street Address
                    </label>
                    <input onChange={(e) => changeHandler(e)} name="address" value={pharmacyChanges.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.address}/>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        City
                    </label>
                    <input onChange={(e) => changeHandler(e)} name="city" value={pharmacyChanges.city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={pharmacy.city}/>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        State
                    </label>
                    <input onChange={(e) => changeHandler(e)}  name="state" value={pharmacyChanges.state} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.state}/>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Zip
                    </label>
                    <input onChange={(e) => changeHandler(e)}  name ="zipcode" value={pharmacyChanges.zipcode} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.zipcode}/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <Button onClick={(e) => submitHandler(e)} variant="primary" size="lg">Submit</Button>
                </div>
            </form>

        </>
    )
}

export default UpdateForm;