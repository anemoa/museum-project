import React from 'react'
import { useLocation } from 'react-router-dom';


const ArtistsInfoBox = ({artistname}) => {

	console.log('infobox>>>', artistname);
	


  return (
	<div className='artists_info_box'>
		<p className='artist_name'>{artistname}</p>

		<div className='birth_box'>
			<div>
				<span className='birth_txt'>born</span>
				<p className='birth_year'>1622-05-22</p>
			</div>
			
			<div>
				<span className='birth_txt'>death</span>
				<p className='birth_year'>1622-05-22</p>
			</div>
		</div>

		<p className='desc_box'>
			Bord van porselein, beschilderd op het glazuur in zwart en goud. 
			Op het plat een voorstelling van de Geboorte van Christus met het 
			kind in een kribbe, terwijl Maria, Jozef en enkele herders toekijken; 
			op de voorgrond een ezel en op de achtergrond twee schapen; de rand met 
			een decoratieve band in de stijl van het Weense Du Paquier-porselein. 
			De voorstelling is gebaseerd op een prent van Jan Luyken (1649-1712). 
			Europese voorstelling in encre de Chine.
		</p>
	</div>
  )
}

export default ArtistsInfoBox;