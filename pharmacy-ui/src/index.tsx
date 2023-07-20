import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdatePharmacy from './pages/UpdatePharmacy';
import Home from './pages/Home';
import { fetchPharmacyList } from './store/pharmacy-actions';
import Pharmacies from './pages/Pharmacies';
import Favorites from './pages/Favorites';

store.dispatch(fetchPharmacyList(1,3))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/updatePharmacy" element={<UpdatePharmacy/>}/>
        <Route path="/pharmacyList" element={<Pharmacies/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
