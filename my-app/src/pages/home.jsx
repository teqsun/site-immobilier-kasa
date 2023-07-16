import Banner from '../components/Banner/banner';
import CardLogements from '../components/DataAnnonces/logements';
import React, { useState } from 'react';
import {logementsList} from '../datas/logementlist'
import {useParams,useSearchParams} from "react-router-dom"

function Home() {

    const [logements] = useState(logementsList)
    
    return (
        <div>
            
            <Banner />
            <div  className='conteneur-card'>
                <div className='flex-logements'>
                    {logements.map((logement) => (

                
                    <CardLogements key={logement.id} logement={logement}/>
                ))}
                </div>
            </div>
        </div>
        
    )
}

export default Home