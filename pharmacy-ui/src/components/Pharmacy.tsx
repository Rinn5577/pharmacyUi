import React from "react";
import {Button, CardActions, CardContent, Container, Typography} from '@mui/material'
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setPharmacy } from "../store/pharmacy-actions";
import { PharmacyModel } from "../models/pharmacy";
import {Card} from '@mui/material'
import "./Pharmacy.css"
import { useNavigate } from "react-router-dom";

//this should be the individual pharmacies, but from the list
//then i can import it into the search to display the info, and into pharmacy list  
//it works with single pharmacy but not with pharmacy list 
//or i can make it with the list but only once it's populated? 
//and how would it know when to use the list vs the pharmacy 
//im wondering if this is a case where i need to pass along the info i want it to have, so it renders hoever many
//pharmacy objects it is given, or if it should retrieve the info from the store itself 




const Pharmacy = (pharmacy:PharmacyModel) => {

const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);
const dispatch=useAppDispatch();
const navigate = useNavigate();

    //when edit is clicked the id is passed in, the pharmacy with a matching id is grabbed from the pharmacy array
    //it is then dispatched to the setPharmacy function in pharmacy actions. 
    //this needs to trigger opening the updateForm 
    //currrently updateForm is listening to state to know when to open. 
    const editClickHandler=(e: React.MouseEvent<HTMLButtonElement>, value: number)=>{
        var targetPharmacy = pharmacyList.filter((pharmacy) => pharmacy.id === value)[0]
        dispatch(setPharmacy(targetPharmacy))
        navigate('/updatePharmacy')
    }

    return(
        <>
        <Container className="cardContainer" disableGutters sx={{maxWidth: 300, minWidth: 300, paddingLeft: 0, paddingRight: 0}}>
            <Card className="pharmacyCard" variant="outlined" sx={{maxWidth: 300, minWidth: 300}}>
                <CardContent>
                    <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                        ID: {pharmacy.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {pharmacy.name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {pharmacy.address + ", " + pharmacy.city + ", " + pharmacy.state + ", " + pharmacy.zipcode }
                    </Typography>
                    <Typography variant="h6">
                        Prescriptions filled:
                    </Typography>
                    <Typography variant="body2">
                        {pharmacy.filledPrescriptionsMonthToDate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={(e)=>editClickHandler(e,pharmacy.id)}>Edit</Button>
                </CardActions>
            </Card>
        </Container>

        

        </>
    )
}

export default Pharmacy;