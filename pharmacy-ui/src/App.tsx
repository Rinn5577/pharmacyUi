import React from 'react';
import { BrowserRouter as Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";
import './App.css';
import Playground from './components/Playground';
import NavBar from './components/NavBar';
import UpdatePharmacy from './pages/UpdatePharmacy';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavBar></NavBar>
    </>

  );
}

export default App;
