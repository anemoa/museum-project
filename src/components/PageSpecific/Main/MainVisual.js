import React, { useEffect, useState } from 'react';
import mainVisual01 from '../../../assets/images/main/main_visual01.webp';
import mainVisual02 from '../../../assets/images/main/main_visual02.webp';
import mainVisual03 from '../../../assets/images/main/main_visual03.webp';




const MainVisual = () => {

	// 1. 맨 처음엔 배경사진 1번으로 초기값 설정
	const [randomBg, setRandomBg] = useState(mainVisual01);

	// 2. 배경 사진 배열로 모으기
	const bgArrary = [mainVisual01, mainVisual02, mainVisual03];
	

	// 3. 이미지가 랜덤으로 보이게 설정
	const showImage = () => {
		const randomBgIdx = Math.floor(Math.random() * bgArrary.length);
		setRandomBg(bgArrary[randomBgIdx]);

		console.log('이미지 변경:', new Date().toLocaleTimeString());  // 시간 찍어보기
	}


	useEffect( () => {
		// 4. 처음에 한 번 이미지가 보이게 실행
		showImage();
		console.log('첫 실행:', new Date().toLocaleTimeString());

		// 5. showImage()가 3초마다 실행되도록 설정
		const timer = setInterval(showImage, 3000);

		// 6. clean up
		return () => clearInterval(timer);
	}, []);

	


	return (
    <section style={{backgroundImage: `url(${randomBg})`}} className='main_visual_wrap'>
		main
	</section>
  )
}

export default MainVisual;