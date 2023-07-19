import React, { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { PharmacyModel } from '../models/pharmacy';

const Home = () => {

    
    const favorites=useAppSelector(state=>state.pharmacy.pharmacy_favorites)

    useEffect(() =>{
        var favoriteKey = (favorites[favorites.length-1]?.id.toString())
        localStorage.setItem(favoriteKey, JSON.stringify(favorites))
    },[favorites])


    //keeping for reference
    var specificFave = (localStorage.getItem("4") || '{}');

    //gets local storage 
    var allLocalStorage = JSON.stringify(localStorage)
    var allLocalAsObject = JSON.parse(allLocalStorage) //this is returning an object with the favorites stored key: string of info
    var arrayofKeys = Object.keys(allLocalAsObject)
    var favesFromLocal = [];

    const updateArray = () =>{
        var fave = {}
        var faveString = ""
        arrayofKeys.map((key)=>(
           faveString = JSON.stringify(localStorage.getItem(key)),
           console.log("test" +faveString),
           fave = JSON.parse(faveString),
            favesFromLocal.push(fave)
        ))
    }
    updateArray()

      

    //var testObj = Object.values(allLocalAsObject).filter((fave:PharmacyModel) => fave.id === 4)[0];
    console.log(Object.keys(allLocalAsObject))

    //var testObj = allLocalAsObject.filter((fave:PharmacyModel) => fave.id === 4)[0];

     

    return(
        <>
        <h3>Home Page</h3>
        <h3>{}</h3>
        </>
    )
}

export default Home;