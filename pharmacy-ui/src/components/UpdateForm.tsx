import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { postPharmacyUpdate } from "../store/pharmacy-actions";


const UpdateForm=()=>{

const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

//creates a copy of the states pharmacy called updatedPharmacy, 
//so we can manipulate it and send it back
const [updatedPharmacy, setUpdatedPharmacy] = useState(pharmacy)

const dispatch=useAppDispatch();



// this takes in the event of the userinput 
//it sets the updatedPharmacy we created with the info it already has and adds in the extra info 
const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPharmacy({...updatedPharmacy,[event.target.name] : event.target.value})
}

// submits copy of the newPharmacy to the service/action to send to api 
function handleSubmit(event:any){
    event.preventDefault();
    dispatch(postPharmacyUpdate(updatedPharmacy))
}



//TODO - add validation to input fields. eg zipcode is min and max of 5 characters 
// make state a selectable drop down? 
    return(
        
        <>

            <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Pharmacy Name
                </label>
                <input  onChange={(e) => changeHandler(e)} name="name" value={updatedPharmacy.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder={pharmacy.name}/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Street Address
                </label>
                <input onChange={(e) => changeHandler(e)} name="address" value={updatedPharmacy.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={pharmacy.address}/>
                </div>
            </div>
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
                <button onClick={(e) => handleSubmit(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Update
                </button>
                </div>
            </form>

        </>
    )
}

export default UpdateForm;