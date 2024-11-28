import React, { useEffect } from 'react';
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

	useEffect( () => {
		const response = async () => {
			
		}

	}, [objId]);



	return (
		<main className='container'>
			<ArtistsWrap artistname={artistId}/>

			<h2>Work of Arts</h2>
			
			<Slider />
		</main>
	)
}

export default Artists;