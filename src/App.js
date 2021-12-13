import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
