import React, { useState } from "react";
import { Container, Button, Navbar, NavbarCollapse, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alternarModoEscuro = () => {
    document.body.classList.toggle("modo-escuro");
    setModoEscuro(!modoEscuro);
  };

  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: "#002F6C" }} variant="dark" className="px-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/logo.jpeg" alt="Embraco Logo" width={80} height={80} className="me-2 rounded" />
            <span style={{ fontSize: "1.25rem" }}>
              <b>EMBRACO REFRIGERAÇÃO INDUSTRIAL</b>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} />

          <NavbarCollapse className="justify-content-end d-none d-md-flex">
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/a-empresa" className="px-3 text-white">
                Sobre a Empresa
              </Nav.Link>

              <img src="/share-icon.png" alt="Compartilhar" width={40} height={40} />

              {/* Botão de Modo Escuro */}
              <Button
                variant={modoEscuro ? "light" : "outline-light"}
                onClick={alternarModoEscuro}
                size="sm"
                className="ms-3"
              >
                {modoEscuro ? "Modo Claro" : "Modo Escuro"}
              </Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      {/* Menu lateral para mobile */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/a-empresa" onClick={handleClose}>
              Sobre a Empresa
            </Nav.Link>

            <img src="/share-icon.png" alt="Compartilhar" width={40} height={40} />

            {/* Botão de modo escuro no menu lateral também */}
            <Button
              variant={modoEscuro ? "dark" : "outline-dark"}
              onClick={() => {
                alternarModoEscuro();
                handleClose();
              }}
              className="mt-3"
            >
              {modoEscuro ? "Modo Claro" : "Modo Escuro"}
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;