import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import MainSlides from '../components/PageSpecific/Main/MainSlides'
import MainInfo from '../components/PageSpecific/Main/MainInfo'

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className='container'>
			<MainSlides />
			<MainInfo />
		</div>
    </main>
  )
}

export default Main