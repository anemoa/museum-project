import React, { useEffect, useState } from 'react';
import CenturyWrap from '../components/PageSpecific/Period/CenturyWrap';
import ArtistsWrap from '../components/PageSpecific/Period/ArtistsWrap';
import axios from 'axios';
import { API_BASE_URL, api_key } from '../utils/apiConfig';


const Period = () => {
	const btnList = [
		{'period': '15th century', 'number': 15},
		{'period': '16th century', 'number': 16},
		{'period': '17th century', 'number': 17},
		{'period': '18th century', 'number': 18},
		{'period': '19th century', 'number': 19},
		{'period': '20th century', 'number': 20},
	];

	const [selectedCentury, setSelectedCenty] = useState(btnList[0].period);
	const [selectedCenturyNum, setSelectedCenturyNum] = useState(btnList[0].number);
	const [artistsImg, setArtistsImg] = useState([]);

	const fetchArtists = async () => {
		try{
			const response = await axios.get(`${API_BASE_URL}collection?key=${api_key}&f.dating.period=${selectedCenturyNum}&ps=30`);

			const baseData = response.data.artObjects;

			// console.log('baseData >>', baseData);
			

			// 화가 이름을 처리하는 함수
			const processArtistName = (name) => {
				// , 기준으로 분리하고 첫 번째 이름만 사용
				const names = name.split(',');
				
				// 앞 뒤 여백 삭제
				return names[0].trim();
			};
			
			// 화가 데이터 처리
			const processData = baseData.map( (data, idx) => {
				return {
					...data,
					principalOrFirstMaker: processArtistName(data.principalOrFirstMaker)
				};
			});
			//console.log('processData >>>', processData);

			// 화가 이름 중복 처리
			const uniqueName = processData.filter((obj, idx, self) => 
				idx === self.findIndex(name => name.principalOrFirstMaker === obj.principalOrFirstMaker)
			);

			console.log('유니크 네임', uniqueName);
			

			// anonymous 이름 제거하기
			const artistLists = uniqueName.filter(name => name.principalOrFirstMaker !== 'anonymous')
			.map(name => name.principalOrFirstMaker);

			// console.log('artistLists >>>', artistLists);

			const artistImgData = uniqueName.filter(artist => artistLists.includes(artist.principalOrFirstMaker))
									.map( (artist) =>({
										name: artist.principalOrFirstMaker,
										img: artist.webImage?.url || null,
										id: artist.id,
										title: artist.title
								  	}));

			console.log('artistImgData >>', artistImgData);
			
			
			// 변경된 화가 이름, 작품 상태 업데이트
			setArtistsImg(artistImgData);

			console.log(artistsImg);
			
			
		}catch(error){
			console.log('error >>', error);
		}
	}

	useEffect( () => {
		fetchArtists(selectedCenturyNum);
	}, [selectedCenturyNum] );


	return (
		<main className='container'>
        	<CenturyWrap />
        	<ArtistsWrap artistsImg={artistsImg}/>
    	</main>
	)
}

export default Period;