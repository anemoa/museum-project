import React from 'react'
import ArtsPic from './ArtsPic'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'
import ArtsInfoWrap from './ArtsInfoWrap';

const ArtsWrap = (props) => {

	console.log(props);
	
	// const {material,artistName, artTitle, productDate, measuer, description, place, birthDate, deathDate} = props;
	// console.log(material);
	
	
	

	return (
		<article className='arts_wrap'>
			<ArtsPic />
			<ArtsInfoWrap />
		</article>
	)
}

export default ArtsWrap;