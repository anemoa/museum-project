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
	const [artWorks, setArtWorks] = useState([]);


	// console.log('artistId >>>', artistId);
	// console.log('Artist objId >>', objId);
	
	const artistName = artistId.replace(/\s+/g, '+');
	
	useEffect( () => {
		const artistDesc = async () => {
			console.log(artistName);
			
			try{

				if(!objId){
					const searchRes = await axios.get(`${API_BASE_URL}collection?key=${api_key}&involvedMaker=${artistName}`);
					console.log('searchRes >>>', searchRes);
					const foundObjId = searchRes.data.artObjects[0]?.objectNumber;

					console.log(foundObjId);

					if(foundObjId){
						const detailRes = await axios.get(`${API_BASE_URL}collection/${foundObjId}?key=${api_key}`);

						console.log('foundObjId >>>', foundObjId);

						const description = detailRes.data.artObject.description || '';
						const data = detailRes.data.artObject.principalMakers[0] || null;
						const webImgUrl = detailRes.data.artObject.webImage.url || '';

						setInfo({description, data, webImgUrl});
					}
					
				}else{

					// objId가 있을 경우 맨 처음 추가한 로직으로 데이터 요청
					const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);
		
					console.log('ARtists response', response.data.artObject.webImage.url);
					
					const description = response.data.artObject.description || '';
					const data = response.data.artObject.principalMakers[0] || null;
					const webImgUrl = response.data.artObject.webImage.url || '';
		
					setInfo({data ,description, webImgUrl});
				}

			} catch(error){
				console.log('error >>', error);
				setInfo({
					data: null,
					description: '',
					webImage: ''
				});
			}
		};
		
		artistDesc();
	}, [objId, artistName]);

	useEffect( () => {
		const fetchArtWorks = async () => {
			try{
				const workRes = await axios.get(`${API_BASE_URL}collection?key=${api_key}&involvedMaker=${artistName}`);
				console.log('workRes >>>', workRes);
				const workResData = workRes.data.artObjects;
				
				const artList = workResData.map( (list) => ({
					name: list.title,
					objId: list.objectNumber,
					img: list.webImage?.url,
				}));

				setArtWorks(artList);
				
			} catch(error){
				console.log(error);
				setArtWorks([]);
			}
		}

		if(artistName){
			fetchArtWorks();
		}
	}, [artistName]);

	console.log('Artists Info >>>', info);
	console.log('artWorks >>>', artWorks);


	return (
		<main className='container'>
			{
				info.data ? <ArtistsWrap info={info} /> : <div>Loading</div>
			}

			<h2>Work of Arts</h2>
			
			<Slider arts={artWorks}/>
		</main>
	)
}

export default Artists;