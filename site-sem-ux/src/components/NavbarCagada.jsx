import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarCagada = () => {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModoEscuro = () => {
    document.body.classList.toggle("modo-escuro");
    setModoEscuro(!modoEscuro);
  };

  return (
    <Navbar expand="md" style={{ backgroundColor: "#002F6C" }} variant="dark" className="px-3 shadow-sm">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.jpeg"
            alt="Embraco Logo"
            width={80}
            height={80}
            className="me-2 rounded"
          />
          <span style={{ fontSize: "1.25rem", color: "red" }}>
            EMBRACO REFRIGERAÇÃO INDUSTRIAL
          </span>
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3">
          <Nav>
            <Nav.Link as={Link} to="/a-empresa" className="px-3 text-white">
              Sobre a Empresa
            </Nav.Link>
						<img src="/ArvoreCompartilhar.jpeg" alt="Compartilhar" width={40} height={40} />
          </Nav>

          <Button
            variant={modoEscuro ? "light" : "outline-light"}
            onClick={alternarModoEscuro}
            size="sm"
          >
            {modoEscuro ? "Modo Claro" : "Modo Escuro"}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarCagada;