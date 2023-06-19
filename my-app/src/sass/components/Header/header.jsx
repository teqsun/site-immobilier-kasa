import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/fichelogement">Fiche logement</Link>
            <Link to="/apropos">A propos</Link>
            <Link to="/404">Erreur 404</Link>
           
        </nav>
    )
}

export default Header