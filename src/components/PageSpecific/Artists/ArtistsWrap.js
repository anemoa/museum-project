import React from 'react';
import ArtistsInfoBox from './ArtistsInfoBox';
import ArtistsDefaultImg from './ArtistsDefaultImg';

const ArtistsWrap = () => {
  return (
	<div className='artists_wrap'>
		<ArtistsDefaultImg />
		<ArtistsInfoBox />
	</div>
  )
}

export default ArtistsWrap