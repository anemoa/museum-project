import React from 'react';


const CenturyListBtn = ({btnList, onCenturyChange}) => {

	console.log('ListBtn >>>', btnList);
	

    return (
		<>
			{
				btnList.map((list, idx) =>(
					<li key={idx}>
						<button onClick={() => onCenturyChange(list.period, list.number)}> {list.period} </button>
					</li>
				))
			}
		</>
    )
};

export default CenturyListBtn;