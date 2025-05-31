import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Navbar expand="md" style={{ backgroundColor: "#002F6C" }} variant="dark" className="px-3 shadow-sm">
				<Container fluid>
					<Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
						<img
							src="Embraco.jpeg"
							alt="embraer logo"
							width={60}
							height={60}
							className="me-2 rounded"
						/>
					</Navbar.Brand>

					{/* Botão "hamburguer" guloso */}
					<button
						onClick={handleShow}
						style={{
							backgroundColor: 'lime',
							border: '4px dashed red',
							color: 'blue',
							fontSize: '20px',
							padding: '10px',
							fontFamily: 'Comic Sans MS',
							borderRadius: '10px'
						}}
					>
						MENU HYPE
					</button>

					<Navbar.Collapse className="justify-content-end d-md-flex">
						<Nav>
							<Nav.Link as={Link} to="/Sobre Nois" className="px-3">Sobre nois</Nav.Link>
							<Nav.Link as={Link} to="/Caridade" className="px-3">Caridade</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Menu lateral ruim de propósito */}
			<Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: 'hotpink', color: 'black' }}>
				<Offcanvas.Header closeButton style={{ backgroundColor: 'yellow', fontFamily: 'Comic Sans MS' }}>
					<Offcanvas.Title>MENU</Offcanvas.Title>
				</Offcanvas.Header>

				<Offcanvas.Body style={{ fontFamily: 'Impact', fontSize: '20px' }}>
					<Nav className="flex-column" style={{ gap: '20px' }}>
						<Nav.Link as={Link} to="/sobre-nois" style={{ color: 'purple', backgroundColor: 'orange', padding: '10px', border: '3px dotted green' }}>
							Sobre nois
						</Nav.Link>
						<Nav.Link as={Link} to="/caridade" style={{ color: 'red', backgroundColor: 'cyan', padding: '10px', transform: 'rotate(-5deg)' }}>
							caridade
						</Nav.Link>
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}

export default CustomNavbar
