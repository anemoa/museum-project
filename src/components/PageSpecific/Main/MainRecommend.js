
import React from 'react';
import NewCard from '../../common/NewCard';

const MainRecommend = ({artists, arts}) => {

	console.log(artists);
	
	const title  = artists ? "Curated Selection of Artists" : "Curated Masterpieces";

	return (
		<section className='recommend_container'>
			<h2 className='recommend_title'>
				{title}
			</h2>
			<div className='recommend_wrap'>
				{
					artists ? <NewCard artists={artists} /> : <NewCard arts={arts} />
				}
			</div>			
		</section>
	)
}

export default MainRecommend;