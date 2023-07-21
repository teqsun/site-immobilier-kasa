import {logementsList} from '../../datas/logementlist'
import { Link } from 'react-router-dom'
import React, { useState,useParams,useEffect } from 'react';
import Error from '../../pages/404';

function CardLogements(props) {
	
	const logement = props.logement

	const link = "/logement/"+logement.id

  
    return (
		
			<div>
			
					<Link key={logement.id} to={link} logement={logement}>
							<div className='format-card'>

								<img className='img-card ' src={logement.cover} alt="name" />
								
							</div>  
							<h3>{logement.title}</h3>
					</Link>
			</div>
		
    )
}

export default CardLogements