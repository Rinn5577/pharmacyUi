import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditPharmacy from './components/UpdatePharmacy/EditPharmacy';
import Favorites from './components/Favorite/Favorites';
import NavBar from './components/NavBar/NavBar';

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
