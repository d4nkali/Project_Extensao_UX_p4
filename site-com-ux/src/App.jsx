import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import InicialComUx from './pages/InicialComUx';
import Navbar from "./components/CustomNavbar";
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
                        <Route path="/" element={<InicialComUx/>}/>
												<Route path='/a-empresa' element={<Empresa/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>

		</div>

	)

}

export default App;