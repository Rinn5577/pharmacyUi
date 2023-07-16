import React from "react";
import { useAppSelector } from "../hooks/redux-hooks";

//this should be the individual pharmacies, but from the list
//then i can import it into the search to display the info, and into pharmacy list  
//it works with single pharmacy but not with pharmacy list 
//or i can make it with the list but only once it's populated? 
//and how would it know when to use the list vs the pharmacy 
//im wondering if this is a case where i need to pass along the info i want it to have, so it renders hoever many
//pharmacy objects it is given, or if it should retrieve the info from the store itself 

//this is only set when a pharmacy is clicked on or when one is searched by id 
const pharmacy=useAppSelector(state=>state.pharmacy.pharmacy);

//only set when all pharmacies are requested 
const pharmacyList=useAppSelector(state=>state.pharmacy.pharmacy_list);


const Pharmacy = () => {

    return(
        <>
        <div>
    <p>Name: {pharmacy.name}</p>
    <p>ID: {pharmacy.id}</p>
    <p>Address: {pharmacy.address}</p>
    <p>City: {pharmacy.city}</p>
    <p>State: {pharmacy.state}</p>
    <p>Created: {pharmacy.createdAt}</p>
    <p>Updated: {pharmacy.updatedAt || "No updates"}</p>


</div>
        </>
    )
}

export default Pharmacy;