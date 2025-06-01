import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import InicialSemUx from './pages/InicalSemUx';
import Navbar from './components/NavbarCagada'
import Empresa from './pages/Empresa';
import './App.css';


const App = () => {

	return (

		<div>

			<BrowserRouter>
				{/* Aqui ficara a navbar */}
				<Navbar />

				<Container className="my-4">
					<Routes>
						<Route path="/" element={<InicialSemUx />} />
						<Route path='/a-empresa' element={<Empresa />} />
					</Routes>
				</Container>
			</BrowserRouter>

		</div>

	)

}

export default App;