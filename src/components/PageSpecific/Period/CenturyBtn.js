import React from 'react';

const CenturyBtn = ({toggleHandle, century}) => {
    return (
        <div className='century'>
            <button className='cen_btn' onClick={toggleHandle}>{century}</button>
        </div>
    )
};

export default CenturyBtn;