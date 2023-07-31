import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdatePharmacy from './pages/UpdatePharmacy';
import {fetchPharmacyList } from './store/pharmacy-actions';
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import { SearchParamsModel } from './models/utils';



//store.dispatch(fetchPharmacyList(1,"all"))
store.dispatch(fetchPharmacyList(1,{} as SearchParamsModel))
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
        <Route path="/:id" element={<UpdatePharmacy/>}/>
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
