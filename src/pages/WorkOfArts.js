import React from 'react';
import Windmill from '../assets/images/windmill.png';
import ArtsWrap from '../components/PageSpecific/WorkOfArts/ArtsWrap';
import { API_BASE_URL } from '../utils/apiConfig';
import axios from 'axios';

const WorkOfArts = () => {

	const artInfo = async () => {
		const response = await axios.get(`${API_BASE_URL}collection/`)
	}

	// const getArtist = async () => {
	// 	try{
	// 		const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);
	// 		console.log(response.data.artObject.principalMakers[0]);
			
	// 		const detail = response.data.artObject.principalMakers[0];
	// 		console.log(detail);
			
	// 	} catch (error){
	// 		console.log(error);
	// 	}
	// };

  return (
    <main className='container'>
        <ArtsWrap />
    </main>
  );
};

export default WorkOfArts;
