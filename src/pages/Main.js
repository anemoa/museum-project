import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo'
import MainMap from '../components/PageSpecific/Main/MainMap';
import SimpleCard from '../components/common/Card';




const slideArtist = [
	{name: 'Marcantonio Raimondi', objId: 'RP-P-OB-12.086'}, 
	{name: 'Johannes Vermeer', objId: 'ssdd'}, 
	{name: 'Jan Caspar Philips', objId: 'fddd'}, 
	{name: 'Jan Adam Kruseman', objId: 'fdsfsdf'}
];

const slideArtwork = [
	{name: 'recomment01', objId: 'SK-C-5'},
	{name: 'recomment02', objId: 'RP-P-OB-12.086'},
	{name: 'recomment03', objId: 'SK-C-1368'},
	{name: 'recomment04', objId: 'dssss3'},
];

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className="container">
			<Slider artists={slideArtist} />
			<MainInfo />
			<Slider arts={slideArtwork}/>
			<MainMap />
		</div>
    </main>
  )
}

export default Main;