import React from 'react';
import Windmill from '../../../assets/images/windmill.png';

const ArtistCard = ({painter, idx}) => {

	//console.log('painter >>>', painter, idx);

	let idx1 = Number(idx+1);
	

	return (
		<article className="artist_card">
		    <div className="artist_box">
		    	<p className="artist_num">
					{idx1 <= 9 ? '0' + idx1 : idx1 }
				</p>
		        <p className='artist_name'>{painter}</p>
		    </div>
		    <div className="pic_box">
		        <img src={Windmill} alt="" />
		    </div>
		</article>
	)
}

export default ArtistCard