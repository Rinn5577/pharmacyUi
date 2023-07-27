import React, {useEffect, useState} from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { postPharmacyUpdate, fetchPharmacy } from '../store/pharmacy-actions';
import { useParams } from "react-router-dom";


const UpdateForm=()=>{
let {id} = useParams();

const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
const [updatedPharmacy, setUpdatedPharmacy] = useState(pharmacy)
const dispatch=useAppDispatch();


const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPharmacy({...updatedPharmacy,[event.target.name] : event.target.value})
}

const submitHandler = (event:any) =>{
    event.preventDefault();
    dispatch(postPharmacyUpdate(updatedPharmacy))
}

 
    return(
        <>
            <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6 w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Pharmacy Name
                    </label>
                    <input  onChange={(e) => changeHandler(e)} name="name" value={updatedPharmacy.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder={pharmacy.name}/>
                   
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Street Address
                    </label>
                    <input onChange={(e) => changeHandler(e)} name="address" value={updatedPharmacy.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.address}/>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        City
                    </label>
                    <input onChange={(e) => changeHandler(e)} name="city" value={updatedPharmacy.city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={pharmacy.city}/>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        State
                    </label>
                    <input onChange={(e) => changeHandler(e)}  name="state" value={updatedPharmacy.state} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.state}/>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Zip
                    </label>
                    <input onChange={(e) => changeHandler(e)}  name ="zipcode" value={updatedPharmacy.zipcode} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.zipcode}/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={(e) => submitHandler(e)} className=" disabled:bg-nuvemGreen bg-nuvemBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Update
                    </button>
                </div>
            </form>

        </>
    )
}

export default UpdateForm;