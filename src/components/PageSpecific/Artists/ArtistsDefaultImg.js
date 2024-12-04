import React from 'react';
import wind from '../../../assets/images/windmill.png';

const ArtistsDefaultImg = ({img}) => {


	console.log(img);
	
	return (
		<div className='default_img'>
			<img src={img} alt="" />
		</div>
	)
};

export default ArtistsDefaultImg;