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
	{name: 'Seated Cupid', objId: 'BK-1963-101', img: 'https://iiif.micr.io/oRVzW/0,0,2953,3951/%5E830,/0/default.webp'},
	{name: 'Isabella', objId: 'SK-A-2931', img: 'https://iiif.micr.io/MrpAp/46,58,6810,9720/%5E830,/0/default.webp'},
	{name: 'Cabinet', objId: 'SK-C-1368', img: 'https://iiif.micr.io/mAtRc/0,0,4464,5916/%5E830,/0/default.webp'},
	{name: 'Musical Company', objId: 'SK-A-4674', img: 'https://iiif.micr.io/hdvov/71,56,4630,6209/%5E830,/0/default.webp'},
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