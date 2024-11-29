import React from 'react';


const CenturyListBtn = () => {

	const btnList = [
		{'period': '15th century', 'number': 15},
		{'period': '16th century', 'number': 16},
		{'period': '17th century', 'number': 17},
		{'period': '18th century', 'number': 18},
		{'period': '19th century', 'number': 19},
		{'period': '20th century', 'number': 20},
	];

    return (
		<>
			{
				btnList.map((list, idx) =>(
					<li key={idx}>
						<button> {list.period} </button>
					</li>
				))
			}
		</>
    )
};

export default CenturyListBtn;