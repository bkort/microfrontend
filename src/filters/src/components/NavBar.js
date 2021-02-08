import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = props => {
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Demo</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </BrowserRouter>
  )
}

export default NavBar
