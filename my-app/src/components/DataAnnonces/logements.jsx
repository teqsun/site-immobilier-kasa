import {logementsList} from '../../datas/logementlist'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


function CardLogements(props) {
	
	const logement = props.logement
	console.log("props de la card")
	console.log(props)

	const link = "/logement/"+logement.id
    //console.log(props)
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