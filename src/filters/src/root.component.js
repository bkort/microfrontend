import React from 'react'
import { Container, Nav, Col, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { NavBar, NavLink } from './components'

export default function Root(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container fluid>
          <Row className="p-3">
            <Col sm={2} className="card">
              <Nav defaultActiveKey="/" className="flex-column">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About</NavLink>
              </Nav>
            </Col>
            <Col sm={10}>Column 2</Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  )
}
