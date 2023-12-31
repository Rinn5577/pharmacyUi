import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {fetchPharmacyList } from './store/actions/pharmacy-actions';
import { SearchParams } from './types/searchParams';


store.dispatch(fetchPharmacyList(1,{} as SearchParams))
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

