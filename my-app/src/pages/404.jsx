import React from 'react';
import { Link } from 'react-router-dom'
import error from '../assets/images/error.png'
import errorMobile from '../assets/images/404mobile.png'

function Error() {
      return (
            <div>
                  <div className="flex-error">
                        <img className="error-desk" src={error} alt="error-img" />
                        <img className="error-mob" src={errorMobile} alt="error-img" />
                  </div>
                  <h2 className="flex-error">
                        Oups! La page que vous demandez n'existe pas.
                  </h2>
                  <nav className="flex-error">
                        <Link to="/" className='back-home'>Retourner sur la page d’accueil</Link>
                  </nav>
            </div>
      )
}

export default Error