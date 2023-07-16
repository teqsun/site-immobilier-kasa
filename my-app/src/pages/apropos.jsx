import React, { useState } from 'react';

import fond from '../assets/images/fond2.png'
import arrowb from '../assets/images/arrow_back.png'


function Apropos() {

    const [isContentVisible, setIsContentVisible] = useState(false)

    const arrowClick = () => {
   return setIsContentVisible(!isContentVisible)

    }
 
    return (
        <div>
            <div className='banner'>
                
                    <img className='img-banner' src={fond}  alt="fond-source-2" />
                       
            </div>

            <div className='flex-description'>
                <div >
                    <div className='bloc-red flex-row animation-description'>
                        <h4>Fiabilité</h4>
                        
                        <img   className={`arrow-b ${isContentVisible?'active' :'inactive'}`} src={arrowb} onClick={arrowClick} alt="Fiabilité"    />
                           
                    </div>
                    
                        <p className={`bloc-grey arrow-descritpion ${isContentVisible? 'active': 'inactive'}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes.</p>
   
                </div>
            </div>

            <div className='flex-description'>
                <div >
                    <div className='bloc-red flex-row arrow'>
                        <h4>Respect</h4>
                        
                        <img   className={`arrow-b ${isContentVisible? 'active' : 'inactive'}`} src={arrowb} onClick={arrowClick} alt="Respect"    />
                        
                        
                    </div>
                    
                    <p className={`bloc-grey arrow-descritpion ${isContentVisible? 'active': 'inactive'}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>

                    
                </div>
            </div><div className='flex-description'>
                <div >
                    <div className='bloc-red flex-row arrow'>
                        <h4>Service</h4>
                        
                        <img   className={`arrow-b ${isContentVisible? 'active' : 'inactive'}`} src={arrowb} onClick={arrowClick} alt="Service"    />
                       
                        
                    </div>
                    
                    <p className={`bloc-grey arrow-descritpion ${isContentVisible? 'active' : 'inactive'}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme</p>

                    
                </div>
            </div>

            <div className='flex-description'>
                <div >
                    <div className='bloc-red flex-row animation-description'>
                        <h4>Sécurité</h4>
                        
                        <img  className='arrow-b ' src={arrowb} alt="Sécurité" />
                       
                        
                    </div>
                    
                        <p className='bloc-grey arrow-descritpion'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes.</p>

                    
                </div>
            </div>


        </div>
    )
}

export default Apropos