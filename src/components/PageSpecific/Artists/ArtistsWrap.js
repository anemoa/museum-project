import React from 'react';
import ArtistsInfoBox from './ArtistsInfoBox';
import ArtistsDefaultImg from './ArtistsDefaultImg';

const ArtistsWrap = ({info}) => {

	const {data, description, webImgUrl} = info;
	// console.log('info >>', data, description);

	// console.log(data.name);
	
	
  return (
	<div className='this_artist_wrap'>
		<ArtistsDefaultImg img={webImgUrl} name={data.name}/>
		<ArtistsInfoBox info={[data.name, data.dateOfBirth, data.dateOfDeath, description]}/>
	</div>
  )
}

export default ArtistsWrap;