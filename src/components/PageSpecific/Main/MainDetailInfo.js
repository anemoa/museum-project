import React from 'react'

const MainDetailInfo = () => {

const info = [
	{
		icon: "www.com",
		title: "opening hours",
		contents1: "mon-fri: 09:00~16:00",
		contents2: "sat-sun: 09:00~15:00"
	},
	{
		icon: "www.nnn",
		title: "admissions",
		contents1: "Adults: $25",
		contents2: "Children & Students: Free"
	},
	{
		icon: "www.dd",
		title: "find us",
		contents1: "sssss aveune",
		contents2: "010101-22522"
	}
];

	return (
		<>
			{
				info.map( (item, idx) => (
					<div key={idx} className='info_box'>
						<p className='info_title_Box'>
							<i>{item.icon}</i> <span>{item.title}</span>
						</p>
						<p className='info_con'>
							{item.contents1}
						</p>
						<p className='info_con'>
							{item.contents2}
						</p>
					</div>
				 ) )
			}
		</>
	)
}

export default MainDetailInfo;