import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Windmill from '../../../assets/images/windmill.png';


// Swiper style import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const MainSlides = () => {
	return (

		<Swiper
		// Swiper 모듈 설치
		modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
		// 기본 설정
		spaceBetween={50}        // 슬라이드 사이 간격
		slidesPerView={3}        // 한 번에 보여줄 슬라이드 개수
		// navigation              // 네비게이션 화살표 활성화
		pagination={{ clickable: true }}  // 페이지네이션 활성화
		scrollbar={{ draggable: true }}  // 스크롤바 활성화
		onSwiper={(swiper) => console.log(swiper)}  // Swiper 인스턴스 콜백
		onSlideChange={() => console.log('slide change')}  // 슬라이드 변경 시 콜백
		autoplay={{delay: 1500}} // 자동 넘김
	  	>
			<SwiperSlide>
				<div className="slide-content">
					<img src={Windmill} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-content">
				<img src={Windmill} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-content">
					<img src={Windmill} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-content">
					<img src={Windmill} alt="" />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default MainSlides