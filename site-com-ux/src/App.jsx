import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import InicialComUx from './pages/InicialComUx';
import Navbar from "./components/CustomNavbar";


const App = () => {

	return (

		<div>

			        	<BrowserRouter>
								{/* Aqui ficara a navbar */}
								<Navbar />

                <Container className="my-4">
                    <Routes>
                        <Route path="/" element={<InicialComUx/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>

		</div>

	)

}

export default App;