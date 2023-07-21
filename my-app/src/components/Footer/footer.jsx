import React from 'react';
import footerdesktop from '../../assets/images/footerdesktop.png'
import footermobile from '../../assets/images/footerMin.png'
import {  } from 'react-router-dom'

function Footer() {
     
    return <footer className="flex-footer">  
     <img className='logo-desk' src={footerdesktop} alt="Footer-desktop" />
     <img className='logo-mob' src={footermobile} alt="Footer-desktop" />
    </footer>
   
}

export default Footer