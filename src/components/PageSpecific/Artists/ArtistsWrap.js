import React from 'react';
import ArtistsInfoBox from './ArtistsInfoBox';
import ArtistsDefaultImg from './ArtistsDefaultImg';

const ArtistsWrap = ({artistname}) => {

	console.log(artistname);
	
  return (
	<div className='artists_wrap'>
		<ArtistsDefaultImg />
		<ArtistsInfoBox  artistname={artistname}/>
	</div>
  )
}

export default ArtistsWrap