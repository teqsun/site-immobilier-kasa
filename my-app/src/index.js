import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './sass/main.scss' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from '../src/pages/404';
import Apropos from '../src/pages/apropos';
import FicheLogement from '../src/pages/fichelogement';
import Home from '../src/pages/home';
import Header from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import reportWebVitals from './reportWebVitals';
import {useParams,useSearchParams} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="*" element={ <Error />} />
        <Route path="/apropos" element={ <Apropos />} />
        <Route path="/logement/:id" element={ <FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
