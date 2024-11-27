import React from 'react';



const ArtsInfoBox = ({objInfo}) => {

	const {measuer, place, desc} = objInfo;

	const artsDetail = [
		{
			title: 'Measurements',
			content: `${objInfo.measuer}`
		},
		{
			title: 'Place',
			content: `${objInfo.place}`
		},
		{
			title: 'Description',
			content: `${objInfo.desc}`
		}
	
	];

	
  	return (
		<div className="arts_info_box">
			{
				artsDetail.map( (art, idx) => (
					<div key={idx} className="sub_info_box">
						<strong className="sub_info_title">
							{art.title}
						</strong>
						<p className="sub_info_value">
							{art.content}
						</p>
					</div>
				))
			}
		</div>
	)
}

export default ArtsInfoBox;