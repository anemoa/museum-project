import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo'
import MainMap from '../components/PageSpecific/Main/MainMap';



const slideArtist = ['Marcantonio Raimondi', 'Johannes Vermeer', 'Jan Caspar Philips', 'Jan Adam Kruseman' ];

const slideArtwork = [];

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className='container'>
			<Slider artists={slideArtist} />
			<MainInfo />
			<Slider />
			<MainMap />
		</div>
    </main>
  )
}

export default Main;