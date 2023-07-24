import React from "react";


function Tag(props) {
	
	const tags = props.tags

	
    return (
        <div>
			
            <div className=" flex-row " >
			{tags.map((tag) => (

                <h6 key={tag} className="tag-format flexColumn marg-r">{tag}</h6>


				
				))}
			</div>

		</div>
       
    )
    
}

export default Tag