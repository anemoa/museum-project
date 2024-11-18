import React from 'react';
import Windmill from '../../../assets/images/windmill.png';

const ArtsPic = () => {
  return (
		<div className='arts_pic_wrap'>
			<div className='art_pic_box'>
				<img src={Windmill} alt="" />
			</div>

			<div className='art_simple_info'>
				<h2 className='art_title'>
					Windmill blahblah
				</h2>

				<div className='art_info_box'>
					<strong className='info_title'>
						Maker
					</strong>
					<p className='info_value'>
						Mike Brown
					</p>
				</div>

				<div className='art_info_box'>
					<strong className='info_title'>
						Production date
					</strong>
					<p className='info_value'>
						1996
					</p>
				</div>
			</div>
		</div>
	)
}

export default ArtsPic;