import React from 'react';
import ArtistsWrap from '../components/PageSpecific/Artists/ArtistsWrap'
import Slider from '../components/common/Slider';
import { useParams } from 'react-router-dom';




const Artists = () => {

	let {artistId} = useParams();
	console.log(artistId);

	
	

	return (
		<main className='container'>
			<ArtistsWrap />

			<h2>Work of Arts</h2>
			
			<Slider />
		</main>
	)
}

export default Artists;