import { Counter } from './features/counter/Counter'
import { Col, Nav, Row } from 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

const App = () => {
  return (
    <>
      <Router>
        <div className="p-3">
          <Row>
            <Col md={2}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/users">
                  <Nav.Link>Users</Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
            <Col md={10}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Col>
          </Row>

          {/* <div className="App">
            <Counter />
          </div> */}
        </div>
      </Router>
    </>
  )
}

export default App
