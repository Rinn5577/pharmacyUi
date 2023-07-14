import { Button, Stack, TextField } from "@mui/material";
import React, {useState} from "react"

const UpdateForm=()=>{
const [pharmacyName, setPharmacyName] = useState('')
const [pharmacyAddress, setPharmacyAddress] = useState('')

function handleSubmit(event:any){
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