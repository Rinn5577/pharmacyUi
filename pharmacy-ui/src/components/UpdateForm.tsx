import { Button, Stack, TextField } from "@mui/material";
import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { postPharmacyUpdate } from "../store/pharmacy-actions";
import Pharmacy from "./Pharmacy";

//TODO - turn this into a pop up modal? 
const UpdateForm=()=>{

const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)

//this should create a copy of the states pharmacy called updatedPharmacy, 
//so we can manipulate it and send it back
const [updatedPharmacy, setUpdatedPharmacy] = useState(pharmacy)

const dispatch=useAppDispatch();


// this takes in the event of the userinput 
//it sets the updatedPharmacy we created with the info it already has and adds in the extra info 
const changeHandler = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div>

<h3>Current Pharmacy Information</h3>
     
<div>
    <Pharmacy {...pharmacy}></Pharmacy>
</div>

</div>


<h2>Update Pharmacy Form</h2>
<form onSubmit={handleSubmit}>
<Stack>
    <TextField
    type="text"
    variant='outlined'
    color='secondary'
    label="Pharmacy Name"
    onChange={(e) => changeHandler(e)}
    value={updatedPharmacy.name}
    name="name"
    />
    <TextField
    type="text"
    variant='outlined'
    color='secondary'
    label="Street Address"
    onChange={(e) => changeHandler(e)}
    value={updatedPharmacy.address}
    name="address"
    />
    <TextField
    type="text"
    variant='outlined'
    color='secondary'
    label="City"
    onChange={(e) => changeHandler(e)}
    value={updatedPharmacy.city}
    name="city"
    />
    <TextField
    type="text"
    variant='outlined'
    color='secondary'
    label="State"
    onChange={(e) => changeHandler(e)}
    value={updatedPharmacy.state}
    name="state"
    />
    
    <TextField
    type="text"
    variant='outlined'
    color='secondary'
    label="Zipcode"
    onChange={(e) => changeHandler(e)}
    value={updatedPharmacy.zipcode}
    name="zipcode"
    />
</Stack>
<Button variant="outlined" type="submit">Update</Button>
</form>

        </>
    )
}

export default UpdateForm;