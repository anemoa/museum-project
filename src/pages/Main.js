import React from 'react'
import MainVisual from '../components/PageSpecific/Main/MainVisual'
import Slider from '../components/common/Slider';
import MainInfo from '../components/PageSpecific/Main/MainInfo'
import MainMap from '../components/PageSpecific/Main/MainMap';

const Main = () => {
  return (
    <main>
        <MainVisual />
		<div className='container'>
			<Slider link={"https://www.naver.com"} img={"https://lh3.googleusercontent.com/CKrxLJqyzjzEg8YAvWgYtJnXLTaNSnHcC4XjYQmhPSHMxIwLQfL2F-mVIi9relG9CX0QrZ6cLysAqNZafu9aFPT6w1pC=w400"} />
			<MainInfo />
			<Slider link={"https://www.google.co.kr"}/>
			<MainMap />
		</div>
    </main>
  )
}

export default Main;