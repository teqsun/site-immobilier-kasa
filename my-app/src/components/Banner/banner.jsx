import React from 'react';

import fond from '../../assets/images/fond1.png'
 
function Banner() {
    return (
        <div className='banner'>
               
                <img className='img-banner' src={fond} alt="fond-source-1" />
            
                <h1>Chez vous, partout et ailleurs</h1>
            
        </div>
    )
}

export default Banner