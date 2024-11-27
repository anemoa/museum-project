import React from 'react'
import ArtsPic from './ArtsPic'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'
import ArtsInfoWrap from './ArtsInfoWrap';

const ArtsWrap = (props) => {

	console.log(props);

	
	const {material,artistName, artTitle, productDate, image ,measuer, description, place, birthDate, deathDate} = props;
	// console.log(material);
	
	
	

	return (
		<article className='arts_wrap'>
			<ArtsPic picInfo={{ title: artTitle, artist: artistName, date: productDate, img: image }}/>
			<ArtsInfoWrap picInfo={{artist: artistName, material: material, measuer: measuer, desc: description, place: place}} />
		</article>
	)
}

export default ArtsWrap;