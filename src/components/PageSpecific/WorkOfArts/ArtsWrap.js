import React from 'react'
import ArtsPic from './ArtsPic'
import ArtsInfoBox from './ArtsInfoBox'
import ArtsSubInfo from './ArtsSubInfo'
import ArtsInfoWrap from './ArtsInfoWrap'

const ArtsWrap = () => {
  return (
		<article className='arts_wrap'>
			<ArtsPic />
			<ArtsInfoWrap />
		</article>
	)
}

export default ArtsWrap;