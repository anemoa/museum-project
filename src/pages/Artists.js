import React from 'react'
import ArtistsWrap from '../components/PageSpecific/Artists/ArtistsWrap'
import Slider from '../components/common/Slider';

const Artists = () => {
	return (
		<main className='container'>
			<ArtistsWrap />
			
			<h2>Work of Arts</h2>
			
			<Slider />
		</main>
	)
}

export default Artists;