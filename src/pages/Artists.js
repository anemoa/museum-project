import React, { useEffect, useState } from 'react';
import ArtistsWrap from '../components/PageSpecific/Artists/ArtistsWrap'
import Slider from '../components/common/Slider';
import { useLocation, useParams } from 'react-router-dom';
import { API_BASE_URL, api_key } from '../utils/apiConfig';
import axios from 'axios';




const Artists = () => {

	const {artistId} = useParams();
	const location = useLocation();
	const objId = location.state ? location.state.objId : undefined;
	const [info, setInfo] = useState({
		data: null,
		description: '',
	});


	console.log('artistId >>>', artistId);
	console.log('Artist objId >>', objId);
	
	const artistName = artistId.replace(' ', '+');
	
	useEffect( () => {
		const artistDesc = async () => {

			try{
				const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);
	
				console.log('ARtists response', response.data.artObject.webImage.url);
				
				const description = response.data.artObject.description || '';
				const data = response.data.artObject.principalMakers[0] || null;
				const webImgUrl = response.data.artObject.webImage.url || '';
	
				setInfo({data ,description, webImgUrl});
			} catch(error){
				console.log('error >>', error);
				setInfo({
					data: null,
					description: '',
					webImage: ''
				});
			}
		};
		
		if(objId){
			artistDesc();
		}
	}, [objId]);


	return (
		<main className='container'>
			{
				info.data ? <ArtistsWrap info={info} /> : <div>Loading</div>
			}

			<h2>Work of Arts</h2>
			
			<Slider />
		</main>
	)
}

export default Artists;