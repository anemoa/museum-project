import React from 'react'
import ArtsPic from './ArtsPic'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'

const ArtsWrap = () => {
  return (
		<article className='arts_wrap'>
			<ArtsPic />
			<ArtsInfoBox />
			<ArtsSubInfo />
		</article>
	)
}

export default ArtsWrap;