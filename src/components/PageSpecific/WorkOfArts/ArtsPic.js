import React from 'react';

const ArtsPic = ({picInfo}) => {
	console.log(picInfo.title);
	
	return (
		<div className='arts_pic_wrap'>
			<div className='art_pic_box'>
				<img src={picInfo.img} alt="" />
			</div>

			<div className='art_simple_info'>
				<h2 className='art_title'>
					{picInfo.title}
				</h2>

				<div className='art_info_box'>
					<strong className='info_title'>
						Maker
					</strong>
					<p className='info_value'>
						{picInfo.artist}
					</p>
				</div>

				<div className='art_info_box'>
					<strong className='info_title'>
						Production date
					</strong>
					<p className='info_value'>
						{picInfo.date}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ArtsPic;