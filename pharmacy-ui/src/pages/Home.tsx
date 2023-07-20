import React, { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { PharmacyModel } from '../models/pharmacy';

const Home = () => {




 


    
    //  var numberFourKey = arrayofKeys.filter(key => key === true).toString(); //this was a test, need to 


    //   var specificFave = (localStorage.getItem(numberFourKey) || '{}'); //a string you need to parse
    //   var test = JSON.parse(specificFave) //an array you can itterate over maybe?
    //   var test2 = test[0]; // the object I want, but im not sure how to tell typscript this is a PharmacyModel Object
    //   console.log(test2)




      

    //var testObj = Object.values(allLocalAsObject).filter((fave:PharmacyModel) => fave.id === 4)[0];


    //var testObj = allLocalAsObject.filter((fave:PharmacyModel) => fave.id === 4)[0];
    //localStorage.clear()
    console.log("from home page: local storage")
    console.log(localStorage)
    console.log("from home page, faves in store")
    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)
    console.log(favorites)

     

    return(
        <>
        <h3>Home Page</h3>
        <h3>{}</h3>
        </>
    )
}

export default Home;