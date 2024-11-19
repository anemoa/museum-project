import React from 'react';
import { Link } from 'react-router-dom';

const ArtsSubInfo = () => {
  return (
		<div className='arts_sub_info'>
			<div >
				<p>Artist</p>
				<Link>Artist name</Link>
			</div>

			<div>
				<p>Add List</p>
				<p>icon</p>
			</div>
		</div>
	)
}

export default ArtsSubInfo;