import React from 'react';
import MainVisual from '../components/PageSpecific/Main/MainVisual';
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo';
import MainMap from '../components/PageSpecific/Main/MainMap';


import gogh from '../assets/images/artist-recommend/gogh.jpg';
import rembrandt from '../assets/images/artist-recommend/Rembrandt.jpg';
import jan from '../assets/images/artist-recommend/jan-sselijn.jpg';
import johannes from '../assets/images/artist-recommend/johannes.jpg';

const slideArtist = [
	{name: 'Rembrandt van Rijn', objId: 'SK-A-4691', img: gogh}, 
	{name: 'Johannes Vermeer', objId: 'SK-C-1368', img: rembrandt}, 
	{name: 'Vincent van Gogh', objId: 'SK-A-3262', img: jan}, 
	{name: 'Jan Asselijn', objId: 'SK-A-4', img: johannes}
];

const slideArtwork = [
	{name: 'recomment01', objId: 'SK-C-5'},
	{name: 'recomment02', objId: 'BK-AM-33-F'},
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