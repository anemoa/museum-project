import React from 'react';
import { FaRegClock, FaEuroSign,FaLocationDot } from "react-icons/fa6";

const MainDetailInfo = ({showInfo = true}) => {

	const info = [
		{
			icon: FaRegClock,
			title: "opening hours",
			contents1: "mon-fri: 09:00~17:00",
			contents2: "sat-sun: 09:00~17:00"
		},
		{
			icon: FaEuroSign,
			title: "admissions",
			contents1: "adults: $25",
			contents2: "children & students: Free"
		},
		{
			icon: FaLocationDot,
			title: "find us",
			contents1: "Museumstraat 1",
			contents2: "1071 XX Amsterdam"
		}
	];

	const displayInfo = showInfo ? info : info.filter((item) => item.title !== "find us" );

	return (
		<>
			{
				displayInfo.map( (item, idx) => (
					<div key={idx} className='info_box'>
						<div className='info_title_Box'>
							<item.icon  className='info_icon'/>
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