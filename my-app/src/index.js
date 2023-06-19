import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './sass/pages';
import Erreur404 from './sass/pages';
import Apropos from './sass/pages';
import FicheLogement from './sass/pages';
import Header from './sass/components/Header/header.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Index />} />
        <Route path="/404" element={ <Erreur404 />} />
        <Route path="/apropos" element={ <Apropos />} />
        <Route path="/fichelogement" element={ <FicheLogement />} />
      </Routes>
      <Index />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
