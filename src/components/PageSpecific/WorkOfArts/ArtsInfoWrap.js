import React from 'react'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'

const ArtsInfoWrap = ({picInfo}) => {

	const {artist, material, measuer, desc, place} = picInfo;

	return (
	<>
		<h2 className='object_detail_title'>object detail</h2>	
		<div className='arts_info_wrap'>
			<ArtsInfoBox objInfo={{measuer: measuer, desc: desc, place: place }}/>
			<ArtsSubInfo subInfo={{artist: artist, material: material}} />
		</div>
	</>
  )
}

export default ArtsInfoWrap;