import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from './index'

export const NavBar = props => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">MF Sample</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
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
  )
}

export default NavBar
