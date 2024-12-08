import React from 'react';
import { Link } from 'react-router-dom';



const ContentRender = ({content}) => {
	console.log(content);
	
	
	switch (content.type){
		case 'link':
			return <Link to={`/artists/${content.text}`} className='artist_btn'>{content.text}</Link>;
		case 'text':
			return <p>{content.text}</p>;
		case 'links':
			return (
				<ul>
					{content.items.map((link, i) => (
						<li key={i}>
							<a href={link.url}>{link.name}</a>
						</li>
					))}
				</ul>
			);
		default:
			return null;
	}
};

const ArtsSubInfo = ({subInfo}) => {

	console.log(subInfo);
	
	const {artist, material} = subInfo;

	const artsInfo = [
		{
			title: 'Artist', 
			content: {
				type: 'link',
				to: '/period',
				text: `${artist}`,
			}
		},
		{
			title: 'My shortlist', 
			content: {
				type: 'text',
				text: 'icon',
			}
		},
		{
			title: 'Object type', 
			content: {
				type: 'text',
				text: `${material}`,
			}
		},
		{
			title: 'Share',
			content: {
				type: 'links',
				items: [
					{url: 'https://www.naver.com', name: 'naver'},
					{url: 'https://www.google.com', name: 'google'},
					{url: 'https://www.insta.com', name: 'insta'},
				]
			}
		}
	];


	return (
		<div className='arts_sub_info'>

			{
				artsInfo.map((item, idx) => (
					<div className="arts_sub_info_box" key={idx}>
						<p className="sub_info_title">
							{item.title}
						</p>
						<ContentRender content={item.content}/>
					</div>
				))
			}
		</div>
	)
}

export default ArtsSubInfo;