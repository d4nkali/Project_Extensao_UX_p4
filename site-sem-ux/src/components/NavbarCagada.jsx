import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, NavbarCollapse, Nav, Offcanvas } from "react-bootstrap";

const NavbarCagada = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="md" style={{ backgroundColor: "#002F6C" }} variant="dark" className="px-3 shadow-sm">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                        <img src="/logo.jpeg" alt="Embraco Logo" 
                        width={80} height={80} className="me-2 rounded" />
                        <span style={{ fontSize: "1.25rem" }}>
                            EMBRACO REFRIGERAÇÃO INDUSTRIAL
                        </span>
                    </Navbar.Brand>
    
                    {/* Botão Hambúrguer apenas em telas pequenas  */}
                    <Navbar.Toggle onClick={handleShow} />
                    <NavbarCollapse className="justify-content-end d-none d-md-flex">
                        <Nav>
                            <Nav.Link as={Link} to="/a-empresa" className="px-3">
                                {" "}Sobre a Empresa{" "}
                            </Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>

        {/* Menu lateral (Offcanvas) visível em telas pequenas ao clicar no hamburguer*/}

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title> Menu </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="flex-column">
                {/* Cada item de menu fecha o Offcanvas ao ser clicado */}

                <Nav.Link as={Link} to="/a-empresa" onClick={handleClose}> Sobre a Empresa </Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Offcanvas>

        </>
    );
};

export default NavbarCagada;
