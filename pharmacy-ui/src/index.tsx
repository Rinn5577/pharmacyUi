import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdatePharmacy from './pages/UpdatePharmacy';
import {fetchPharmacyList } from './store/pharmacy-actions';
import Pharmacies from './pages/Pharmacies';
import Favorites from './pages/Favorites';

store.dispatch(fetchPharmacyList(1,"all"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pharmacies/>}/>
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
