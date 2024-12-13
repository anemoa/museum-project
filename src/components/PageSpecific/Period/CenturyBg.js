import React from 'react';
import CenturyListBtn from './CenturyListBtn';
import { motion, AnimatePresence } from "framer-motion";

const CenturyBg = ({isActive, btnList, onCenturyChange}) => {

	console.log(onCenturyChange);
	

    return (
		<AnimatePresence>
			<motion.div className={`cen_bg ${isActive ? 'active' : ''}`}
			initial={{ y: -100, opacity: 0 }}  // 초기 상태
			animate={{ y: 0, opacity: 1 }}  // 애니메이션 상태
			exit={{ 
				y: -50,   // 위로 사라짐
				opacity: 0 
			}}
			transition={{ 
				duration: 5,
				ease: "easeInOut"
			}}>
				<div className='cen_list_wrap'>
					<ul className='cen_list'>
						<CenturyListBtn btnList={btnList} onCenturyChange={onCenturyChange} />
					</ul>
				</div>
			</motion.div>
		</AnimatePresence>
    )
}

export default CenturyBg;