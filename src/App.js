import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Period from './pages/Period';
import WorkOfArts from './pages/WorkOfArts';
import './styles/main.scss';
import Artists from './pages/Artists';
import Header from './components/Layout/Header';
import AboutUs from './pages/AboutUs';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/work-of-arts/:artId" element={<WorkOfArts />} />
				<Route path="/period" element={<Period />} />
				<Route path="/artists/:artistId" element={<Artists />} />
			</Routes>
			<Footer />
		</BrowserRouter>
    </div>
  );
}

export default App;