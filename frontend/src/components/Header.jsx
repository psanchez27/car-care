import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Car Care</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href='#comingFeatures'>Coming Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
