import React, { useEffect, useState } from 'react';
import ArtsWrap from '../components/PageSpecific/WorkOfArts/ArtsWrap';
import { API_BASE_URL, api_key } from '../utils/apiConfig';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const WorkOfArts = () => {

	const location = useLocation();
	const objId = location.state ? location.state.objId : undefined;
	const [artDatas, setArtDatas] = useState(null);

	useEffect( () => {
		const artInfo = async () => {
			const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);
			const artData = response.data.artObject;
			const artDetail = response.data.artObject.principalMakers[0];
			
			setArtDatas({
				material: artData.materials[0], // 그림인지 도자기인지
				artistName: artData.principalMaker, // 화가 이름
				artTitle: artData.title, // 그림 이름
				productDate: artData.dating.presentingDate, // 만든 년도
				measuer: artData.subTitle, // 작품 크기
				description: artData.description, // 작품 설명
				place: artData.classification.places[0],
				birthDate: artDetail.dateOfBirth,
				deathDate: artDetail.dateOfDeath
	
			});
		};

		artInfo();
	}, [objId]);
	



  return (
    <main className='container'>
        {artDatas && <ArtsWrap {...artDatas} />}
    </main>
  );
};

export default WorkOfArts;
