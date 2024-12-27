import { useEffect, useState } from 'react';
import CenturyBg from './CenturyBg';
import CenturyBtn from './CenturyBtn';

const CenturyWrap = ({century, onCenturyChange}) => {
    const [isActive, setIsActive] = useState(false);
	const {btnList, selectedCentury, selectedCenturyNum} = century;
	console.log(btnList, selectedCentury, selectedCenturyNum, onCenturyChange);
	
    
    useEffect( () => {
        console.log(isActive);
    }, [isActive]);

    const toggleHandle = () => {
        setIsActive(!isActive);
    };

	// console.log(century);
	

    return (
        <div className='century_container'>
            <div className='cen_wrap'>
                <CenturyBtn toggleHandle={toggleHandle} century={selectedCentury} />
                <CenturyBg isActive={isActive} btnList={btnList} onCenturyChange={(period,number) => {
					onCenturyChange(period, number);
					setIsActive(false);
				}} />
            </div>
        </div>
    )
};

export default CenturyWrap;
