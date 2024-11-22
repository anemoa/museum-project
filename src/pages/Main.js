import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo'
import MainMap from '../components/PageSpecific/Main/MainMap';



const slideArtist = [
	{name: 'Marcantonio Raimondi', objId: 'RP-P-OB-12.086'}, 
	{name: 'Johannes Vermeer', objId: ''}, 
	{name: 'Jan Caspar Philips', objId: ''}, 
	{name: 'Jan Adam Kruseman', objId: ''}
];

const slideArtwork = [];

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className="container">
			<Slider artists={slideArtist} />
			<MainInfo />
			<Slider />
			<MainMap />
		</div>
    </main>
  )
}

export default Main;