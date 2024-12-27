import React from 'react';
import CenturyListBtn from './CenturyListBtn';

const CenturyBg = ({isActive, btnList, onCenturyChange}) => {

	console.log(onCenturyChange);
	

    return (
		<div className={`cen_bg ${isActive ? 'active' : ''}`}>
			<div className={`cen_list_wrap ${isActive ? 'active' : ''}`}>
				<ul className='cen_list'>
					<CenturyListBtn btnList={btnList} onCenturyChange={onCenturyChange} />
				</ul>
			</div>
		</div>
    )
}

export default CenturyBg;