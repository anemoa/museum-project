import React from 'react';
import MainVisual from '../components/PageSpecific/Main/MainVisual';
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo';
import MainMap from '../components/PageSpecific/Main/MainMap';


import gogh from '../assets/images/artist-recommend/gogh.jpg';
import rembrandt from '../assets/images/artist-recommend/Rembrandt.jpg';
import jan from '../assets/images/artist-recommend/jan-sselijn.jpg';
import johannes from '../assets/images/artist-recommend/johannes.jpg';
import MainRecommend from '../components/PageSpecific/Main/MainRecommend';

const slideArtist = [
	{title: 'Best Artist', name: 'Rembrandt van Rijn', objId: 'SK-A-4691', img: rembrandt}, 
	{title: 'Best Artist', name: 'Johannes Vermeer', objId: 'SK-C-1368', img: johannes}, 
	{title: 'Best Artist', name: 'Vincent van Gogh', objId: 'SK-A-3262', img: gogh}, 
	{title: 'Best Artist', name: 'Jan Asselijn', objId: 'SK-A-4', img: jan}
];

const slideArtwork = [
	{title: 'Masterpiece', name: 'Seated Cupid', objId: 'BK-1963-101', img: 'https://iiif.micr.io/oRVzW/0,0,2953,3951/%5E830,/0/default.webp'},
	{title: 'Masterpiece', name: 'Isabella', objId: 'SK-A-2931', img: 'https://iiif.micr.io/MrpAp/46,58,6810,9720/%5E830,/0/default.webp'},
	{title: 'Masterpiece', name: 'Cabinet', objId: 'SK-C-1368', img: 'https://iiif.micr.io/mAtRc/0,0,4464,5916/%5E830,/0/default.webp'},
	{title: 'Masterpiece', name: 'Musical Company', objId: 'SK-A-4674', img: 'https://iiif.micr.io/hdvov/71,56,4630,6209/%5E830,/0/default.webp'},
];

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className="container">

			{/* <Slider artists={slideArtist} /> */}
			<MainRecommend artists={slideArtist} />
			<MainInfo />
			<MainRecommend arts={slideArtwork} />
			<MainMap />
		</div>
    </main>
  )
}

export default Main;