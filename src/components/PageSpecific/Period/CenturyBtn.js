import React from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";


const CenturyBtn = ({toggleHandle, century, isActive}) => {
    return (
        <div className='century'>
            <button className='cen_btn' onClick={toggleHandle}>{century} {isActive ? <FaChevronDown /> : <FaChevronUp />} </button>
        </div>
    )
};

export default CenturyBtn;