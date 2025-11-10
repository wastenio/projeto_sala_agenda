import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarMenu({ onShowAgendamentos, onShowSalas }) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand href="#">📅 Sistema de Agendamento</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={onShowAgendamentos}>Agendamentos</Nav.Link>
            <Nav.Link onClick={onShowSalas}>Salas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
