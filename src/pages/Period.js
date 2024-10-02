import React from 'react';
import CenturyWrap from '../components/PageSpecific/Period/CenturyWrap';
import ArtistsWrap from '../components/PageSpecific/Period/ArtistsWrap';


const Period = () => {
  return (
    <main className='container'>
        <CenturyWrap />
        <ArtistsWrap />
    </main>
  )
}

export default Period