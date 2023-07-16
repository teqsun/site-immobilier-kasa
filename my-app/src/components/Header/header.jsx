import React from 'react';
import { Link } from 'react-router-dom'
import logokasa from '../../assets/images/logokasa.png'
 
function Header() {
    return (
        <header>
        <div className="flex-logo">   
            <img  src={logokasa} alt="logo-desktop" />
        </div>
        <nav>
           
           
            <Link to="/apropos">A propos</Link>

            <Link to="/">Accueil</Link>
            
           
        </nav>
        </header>
    )
}

export default Header