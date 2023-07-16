import React from 'react';
import arrowb from '../../assets/images/arrow_back.png'

function DropDown(props) {
	
	const descri = props.descri
    const equipements = props.equip


    return (
		
			<div>
			
            <div className='wibloc' >
                <div className='flex-fiche-descri'>
                    <div>
                        <div className='bloc-red-fiche flex-row animation-description'>
                            <h4>Déscription</h4>
                            <img   className='arrow-b' src={arrowb} alt="arrow-b"    />
                        </div>
                            <p className='bloc-grey-fiche arrow-descritpion'>{descri}</p>
                    </div>
                    
                    <div>
                        <div className='bloc-red-fiche flex-row animation-description'>
                            <h4>Équipements</h4>
                            <img   className='arrow-b' src={arrowb} alt="arrow-b"    />
                        </div>
                            
                            <ul  className='bloc-grey-fiche arrow-descritpion'>
                                {equipements.map((liste) => (
                                <li key={liste}>{liste}</li>
                                
                                ))}
                            </ul>
                            
                    </div>                                        
                </div>
            </div>
		</div>
		
    )
}

export default DropDown