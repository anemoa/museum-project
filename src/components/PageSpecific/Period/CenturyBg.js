import React from 'react';
import CenturyListBtn from './CenturyListBtn';




const CenturyBg = ({isActive}) => {
    return (
        <div className={`cen_bg ${isActive ? 'active' : ''}`}>
            <div className='cen_list_wrap'>
                <ul className='cen_list'>
                    <CenturyListBtn/>
                </ul>
            </div>
        </div>
    )
}

export default CenturyBg;