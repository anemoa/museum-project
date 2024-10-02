import { useEffect, useState } from 'react';
import CenturyBg from './CenturyBg';
import CenturyBtn from './CenturyBtn';

const CenturyWrap = () => {
    const [isActive, setIsActive] = useState(false);
    
    useEffect( () => {
        console.log(isActive);
    }, [isActive]);

    const toggleHandle = () => {
        setIsActive(!isActive);
    }

    return (
        <section className='century_container'>
            <div className='cen_wrap'>
                <CenturyBtn toggleHandle={toggleHandle}/>
                <CenturyBg isActive={isActive}/>
            </div>
        </section>
    )
};

export default CenturyWrap;
