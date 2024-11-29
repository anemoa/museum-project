import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistsWrap = ({artistData}) => {

	console.log('artistData >>', artistData);
	

    return (
        <section className='artists_wrap'>
            {
                artistData.map( (artist, idx) => <ArtistCard key={idx} idx={idx} painter={artist}/> )
            }
        </section>
    )
}

export default ArtistsWrap;