import React from 'react'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'

const ArtsInfoWrap = (artInfo) => {

	// console.log(artInfo);
	return (
	<>
		<h2>object detail</h2>	
		<div className='arts_info_wrap'>
			<ArtsInfoBox />
			<ArtsSubInfo />
		</div>
	</>
  )
}

export default ArtsInfoWrap;