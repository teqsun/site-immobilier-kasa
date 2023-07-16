import React, { useState } from "react";
import ArrowF from "../../assets/images/arrow_forward.png"
import ArrowB from "../../assets/images/arrow_back2.png"
function Slider(props) {
	const [currentPicture, setCurrentPicture] = useState(0)

	const searchClassName = (i) => {

		if(i === currentPicture) return "currentImg";
		return "";
	}

const btnNext = () => {
setCurrentPicture((currentPicture + 1) % photos.length);
};

const btnPrevious = () => {

const newCurrentPicture = currentPicture - 1;
if(newCurrentPicture < 0){
	setCurrentPicture(photos.length - 1);
	return;
}
setCurrentPicture(currentPicture - 1)
}
/*
const onePicture = () => {
	return photos && photos.length > 0 ;
};
  */
	console.log("props du slide")
	console.log(props)
	const photos = props.photos
	console.log("length des photos")
	console.log(photos.length)
	console.log(photos)
    return (
        <div className="format-carrousel">
			

			{photos.map((photo, i) => (

				<img key={i} className={searchClassName(i)} src={photo} alt="" />
				))}
				{photos.length > 1 && <div className="arrow-carrou">
					<img className="btn arrow-carrou-back"  onClick={btnPrevious}  src={ArrowB} alt="" />
					<img className="btn arrow-carrou-next" onClick={btnNext} src={ArrowF} alt=""  />
					
				</div>}
		</div>
       
    )
    
}

export default Slider