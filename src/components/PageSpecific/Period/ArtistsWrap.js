import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistsWrap = ({artistsImg}) => {

	// console.log('artistsImg >>', artistsImg);
	

    return (
        <section className='artists_wrap'>
            {
                artistsImg.map( (artist, idx) => <ArtistCard key={idx} idx={idx} painter={artist.name} image={artist.img} /> )
            }
        </section>
    )
}

export default ArtistsWrap;