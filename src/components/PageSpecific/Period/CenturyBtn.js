import React from 'react'

const CenturyBtn = ({toggleHandle}) => {
    return (
        <div className='century'>
            <button className='cen_btn' onClick={toggleHandle}>16 Century</button>
        </div>
    )
};

export default CenturyBtn;