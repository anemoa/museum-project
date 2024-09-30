import React from 'react'
import CenturyWrap from '../components/PageSpecific/Period/CenturyWrap'

const Period = () => {
  return (
    <main className='container'>
        <section className='century_container'>
            <div className="cen_wrap">
                <div className='century'>
                    <button className='cen_btn'>16 Century</button>
                </div>

                <CenturyWrap />
            </div>

        </section>

        <section className='artists_wrap'>
            
        </section>
    </main>
  )
}

export default Period