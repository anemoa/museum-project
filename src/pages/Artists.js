import React from 'react';
import ArtistsWrap from '../components/PageSpecific/Artists/ArtistsWrap'
import Slider from '../components/common/Slider';
import { useLocation, useParams } from 'react-router-dom';
import { API_BASE_URL, api_key } from '../utils/apiConfig';
import axios from 'axios';




const Artists = () => {

	const {artistId} = useParams();
	const location = useLocation();
	const objId = location.state ? location.state.objId : undefined;
	
	console.log(artistId);
	console.log(objId);




	const getArtist = async () => {
		try{
			const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);
			console.log(response.data.artObject.principalMakers[0]);
			
			const detail = response.data.artObject.principalMakers[0];
			console.log(detail);
			
		} catch (error){
			console.log(error);
		}
	};

	getArtist();

	return (
		<main className='container'>
			<ArtistsWrap artistname={artistId}/>

			<h2>Work of Arts</h2>
			
			<Slider />
		</main>
	)
}

export default Artists;