import React from 'react'
import ArtsPic from './ArtsPic'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'
import ArtsInfoWrap from './ArtsInfoWrap'
import { useLocation } from 'react-router-dom'

const ArtsWrap = () => {

	const location = useLocation();
	const objId = location.state ? location.state.objId : undefined;

	console.log('이건 작품 ID야!!>>' , objId);
	

  return (
		<article className='arts_wrap'>
			<ArtsPic />
			<ArtsInfoWrap />
		</article>
	)
}

export default ArtsWrap;