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
	const [artistData, setArtistData] = useState([]);


	const fetchArtists = async () => {
		try{
			const response = await axios.get(`${API_BASE_URL}collection?key=${api_key}&f.dating.period=${selectedCenturyNum}&ps=30`);

			const baseData = response.data.artObjects;

			const processArtistName = (name) => {
				const names = name.split(',');

				return names[0].trim();
			};
			

			const processData = baseData.map( (data, idx) => {
				return {
					...data,
					principalOrFirstMaker: processArtistName(data.principalOrFirstMaker)
				};
			});

			console.log(processData);

			const uniqueName = processData.filter((obj, idx, self) => 
				idx === self.findIndex(name => name.principalOrFirstMaker === obj.principalOrFirstMaker)
			);

			const artistLists = uniqueName.filter(name => name.principalOrFirstMaker !== 'anonymous')
			.map(name => name.principalOrFirstMaker);

			console.log(artistLists);
			
			setArtistData(artistLists)
			
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
        	<ArtistsWrap artistData={artistData}/>
    	</main>
	)
}

export default Period;