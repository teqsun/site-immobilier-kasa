import React from 'react';
import { Link } from 'react-router-dom'
import logokasa from '../../assets/images/logokasa.png'
import logokasaMini from '../../assets/images/logo2.png'
 
function Header() {
    return (
        <header>
        <div className="flex-logo">   
            <img className='normal-logo' src={logokasa} alt="logo-desktop" />
            <img className='little-logo' src={logokasaMini} alt="logo-desktop" />
        </div>
        <nav>
           
           
            <Link to="/apropos">A propos</Link>

            <Link to="/">Accueil</Link>
            
           
        </nav>
        </header>
    )
}

export default Header