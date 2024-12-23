import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NewCard = ({artists, arts}) => {
	console.log(artists);
	
	useEffect(() => {
	
	}, [artists]
	
	);

	return (
		<>		
			{
				artists ? artists.map((artist, idx) => {
					return <article key={idx} className="artist_wrap">
					<Link className="artist_box" to={`/artists/${artist.name}`} state={{objId: artist.objId}}>
						<div className="artist_img">
							<div className="inner_bg" style={{ backgroundImage: `url(${artist.img})` }}>

							</div>
						</div>
						<div className='artist_name'>
							<p className='sub_title_artist'>
								{artist.title}
							</p>
							<strong>
								{artist.name}
							</strong>
						</div>
					</Link>
				</article>
				}) : arts?.map((art, idx) => {
					return <article key={idx} className="artist_wrap">
					<Link className="artist_box" to={`/work-of-arts/${art.name}`} state={{objId: art.objId}}>
						<div className="artist_img">
							<div className="inner_bg" style={{ backgroundImage: `url(${art.img})` }}>

							</div>
						</div>
						<div className='artist_name'>
							<p className='sub_title_artist'>
								{art.title}
							</p>
							<strong>
								{art.name}
							</strong>
						</div>
					</Link>
				</article>
				}) 

			}
		</>

	)
}

export default NewCard;