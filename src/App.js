import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Period from './pages/Period';
import WorkOfArts from './pages/WorkOfArts';
import './styles/main.scss';
import Artists from './pages/Artists';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WorkOfArts />}/>
				<Route path="/work-of-arts" element={<WorkOfArts />} />
				<Route path="/period" element={<Period />} />
				<Route path="/artists" element={<Artists />} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
