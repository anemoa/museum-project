import React from 'react';

const ArtistsInfoBox = ({info}) => {

	console.log('infobox>>>', info);
	


  return (
	<div className='artists_info_box'>
		<p className='artist_name'>{info[0]}</p>

		<div className='birth_box'>
			<div>
				<span className='birth_txt'>born</span>
				<p className='birth_year'>{info[1]}</p>
			</div>
			
			<div>
				<span className='birth_txt'>death</span>
				<p className='birth_year'>{info[2]}</p>
			</div>
		</div>

		<p className='desc_box'>
			{info[3]}
		</p>
	</div>
  )
}

export default ArtistsInfoBox;