import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Packages from './Componets/CheckoutPackages';
import Hero from './Componets/Hero';
import Header from './Componets/Header';
import TourSearch from './Componets/TourSearch';
import Popular from './Componets/Popular';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Header/>
<Hero/>
<TourSearch/>
<Popular/>
<Packages/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
