import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditPharmacy from './pages/EditPharmacy';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<EditPharmacy/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </>
  );
}

export default App;
