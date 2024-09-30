import React from 'react'
import CenturyBtn from './CenturyBtn'

const CenturyWrap = () => {
    return (
        <div className='cen_bg active'>
            <div className='cen_list_wrap'>
                <ul className='cen_list'>
                    <CenturyBtn />
                    <CenturyBtn />
                    <CenturyBtn />
                    <CenturyBtn />
                    <CenturyBtn />
                    <CenturyBtn />
                </ul>
            </div>
        </div>
    )
}

export default CenturyWrap