import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/services' element={<Services />} />
					<Route path='/products' element={<Products />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
