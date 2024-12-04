import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({painter, idx, image}) => {

	//console.log('painter >>>', painter, idx);

	let idx1 = Number(idx+1);

	return (
		<article className="artist_card">
			<Link to={`/artists/${painter}`}>
				<div className="artist_box">
					<p className="artist_num">
						{idx1 <= 9 ? '0' + idx1 : idx1 }
					</p>
					<p className='artist_name'>{painter}</p>
				</div>
				<div className="pic_box">
					<img src={image} alt="" />
				</div>
			</Link>
		</article>
	)
}

export default ArtistCard