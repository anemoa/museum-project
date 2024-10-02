import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistsWrap = () => {
    const artists = ['Meissener Porzellan Manufaktur', 
    'Giovanni Battista Piranesi', 
    'Jan Caspar Philips',
    'Jan Luyken',
    'Jan Brandes', 
    'Pieter Tanjé', 
    'Cornelis Ploos van Amstel', 
    'Robert Jacob Gordon', 
    'Louis Ducros', 
    'Cornelis Pronk', 
    , 'Johannes Schiotling'];

    return (
        <section className='artists_wrap'>
            {
                artists.map( (artist, idx) => <ArtistCard key={idx} painter={artist}/> )
            }
        </section>
    )
}

export default ArtistsWrap;