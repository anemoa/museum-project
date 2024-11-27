import React from 'react';

const artsDetail = [
	{
		title: 'Measurements',
		content: '122x133 cm'
	},
	{
		title: 'Place',
		content: 'sdfdf',
	},
	{
		title: 'Description',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati dolorem ab veniam consectetur fugit perferendis nemo? Quae, pariatur tenetur possimus velit eum dolore provident distinctio nihil hic non unde!',
	}

];

const ArtsInfoBox = () => {
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