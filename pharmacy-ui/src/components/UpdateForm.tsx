import { Button, Stack, TextField } from "@mui/material";
import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { postPharmacyUpdate } from "../store/pharmacy-actions";

const UpdateForm=()=>{


//need to grab the id from user input and use it to select the pharmacy. 
//Then i want to display that information. 
//maybe i use the search component for this.
//then i capture the information the user inputs for the new pharmacy 
//i then add it to the pharmacy we already have loaded up, we wont be changing all the fields so it needs to merge with the info already there
//once the newPharmacy is set i can pass that object to the actions which will pass it to the service to make the api call 
//in the handle submit i will use postpharm function i imported

//currently using search to set the pharmacy. but i want to have a button on the pharmacy it's self. need to work on individual pharmacy display for that to work
// i think one of the main problems here is im not loading the pharmacy i want when the page loads. so i need to work on pharmacy display and
//when you click update it send the infromation. 
//however im worried about coupling? I guess you don't have access to this page without clicking that button but, idk yet 
const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy)
const [updatedPharmacy, setUpdatedPharmacy] = useState(pharmacy)
console.log("This is the updatedPharmacy: " + updatedPharmacy)
const dispatch=useAppDispatch();


const checkPharmacy=():boolean=>{
    if(pharmacy.id===0){
        return false
    }
    return true
}



const changeHandler = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdatedPharmacy({...updatedPharmacy,[event.target.name] : event.target.value})
}


function handleSubmit(event:any){
    //not sure i need the prevent default for prod
    //this is where im going to send the info to the store? 
    //perhaps to the api its self and set up a listener on the api?
    event.preventDefault();
    //i think this might be all i need 
    //might do some validation here?
    //dispatch(postPharmacyUpdate(updatedPharmacy))
    console.log(updatedPharmacy)
}
    return(
        <>
        <div>

            <h3>Current Pharmacy Information</h3>

  {          checkPharmacy() && (            <div>
                <p>Name: {pharmacy.name}</p>
                <p>ID: {pharmacy.id}</p>
                <p>Address: {pharmacy.address}</p>
                <p>City: {pharmacy.city}</p>
                <p>State: {pharmacy.state}</p>
                <p>Created: {pharmacy.createdAt}</p>
                <p>Updated: {pharmacy.updatedAt || "No updates"}</p>


            </div>)}

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
                //value={updatedPharmacy.address}
                name="address"
                />
                <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="City"
                onChange={(e) => changeHandler(e)}
                //value={updatedPharmacy.city}
                name="city"
                />
                <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="State"
                onChange={(e) => changeHandler(e)}
                //value={updatedPharmacy.state}
                name="state"
                />
                <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Zipcode"
                onChange={(e) => changeHandler(e)}
                //value={updatedPharmacy.zipcode}
                name="zipcode"
                />
            </Stack>
            <Button variant="outlined" type="submit">Update</Button>
        </form>
        </>
    )
}

export default UpdateForm;