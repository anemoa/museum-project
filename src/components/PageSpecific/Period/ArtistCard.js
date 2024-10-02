import React from 'react';
import Windmill from '../../../assets/images/windmill.png';

const ArtistCard = ({painter}) => {
  return (
        <article className='artist_card'>
            <div className="artist_box">
                <p className='artist_num'>01</p>
                <p className='artist_name'>{painter}</p>
            </div>
            <div className="pic_box">
                <img src={Windmill} alt="" />
            </div>
        </article>
    )
}

export default ArtistCard