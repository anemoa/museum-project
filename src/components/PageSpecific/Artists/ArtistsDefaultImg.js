import React from 'react';
import wind from '../../../assets/images/windmill.png';

const ArtistsDefaultImg = ({img, name}) => {

	
	return (
		<div className='default_img'>
			<img src={img} alt={name} />
		</div>
	)
};

export default ArtistsDefaultImg;