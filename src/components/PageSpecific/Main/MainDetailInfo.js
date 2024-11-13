import React from 'react'

const MainDetailInfo = () => {

	const info = [
		{
			icon: "material-symbols-outlined",
			iconInfo: "schedule",
			title: "opening hours",
			contents1: "mon-fri: 09:00~17:00",
			contents2: "sat-sun: 09:00~17:00"
		},
		{
			icon: "material-symbols-outlined",
			iconInfo: "credit_card",
			title: "admissions",
			contents1: "adults: $25",
			contents2: "children & students: Free"
		},
		{
			icon: "material-symbols-outlined",
			iconInfo: "map",
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
						<div className='info_title_Box'>
							<span className={item.icon}>{item.iconInfo}</span>
							<div className='info_title'>
								<span>{item.title}</span>
							</div>
						</div>
						<p className='info_contents'>
							{item.contents1}
						</p>
						<p className='info_contents'>
							{item.contents2}
						</p>
					</div>
				 ) )
			}
		</>
	)
}

export default MainDetailInfo;