import React from 'react';
import Windmill from '../../../assets/images/windmill.png';

const ArtsPic = () => {
  return (
		<div className='arts_pic_wrap'>
			<div className='art_pic_box'>
				<img src={Windmill} alt="" />
			</div>

			<div className='art_simple_info'>
				<p className=''>
					Windmill in the area
				</p>

			</div>
		</div>
	)
}

export default ArtsPic;