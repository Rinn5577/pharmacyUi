import { Button, Stack, TextField } from "@mui/material";
import React, {useState} from "react"

const UpdateForm=()=>{

    //i think i can grab the current pharmacy state and set it in useState, then i should be able to send that object as a payload? 
const [pharmacyName, setPharmacyName] = useState('')
const [pharmacyAddress, setPharmacyAddress] = useState('')

function handleSubmit(event:any){
    //not sure i need the prevent default for prod
    //this is where im going to send the info to the store? 
    //perhaps to the api its self and set up a listener on the api?
    event.preventDefault();
    console.log(pharmacyName, pharmacyAddress)
}
    return(
        <>
        <h2>Update Pharmacy Form</h2>
        <form onSubmit={handleSubmit}>
            <Stack>
                <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Pharmacy Name"
                onChange={(e)=> setPharmacyName(e.target.value)}
                value={pharmacyName}
                />
                <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Pharmacy Address"
                onChange={(e)=> setPharmacyAddress(e.target.value)}
                value={pharmacyAddress}
                />
            </Stack>
            <Button variant="outlined" type="submit">Update</Button>
        </form>
        </>
    )
}

export default UpdateForm;