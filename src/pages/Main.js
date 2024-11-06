import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo'

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className='container'>
			<Slider />
			<MainInfo />
			<Slider />
		</div>
    </main>
  )
}

export default Main;