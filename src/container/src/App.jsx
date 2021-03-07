import { Counter } from './features/counter/Counter'
import { Col, Nav, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, NavLink as RouterNavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import MicroFrontend from './utils/MicroFrontend'
import Header from './components/Header'
import { NavLink } from 'reactstrap'

function PageNotFound() {
  return <h2>404 - Page Not Found (Container)</h2>
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function Filters({ history }) {
  console.log(history)
  return <MicroFrontend history={history} host="http://localhost:3011" name="filters" /> // process.env.MF_FILTERS_HOST
}

const App = () => {
  return (
    <>
      <Router>
        <Header />
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
                <LinkContainer to="/filters">
                  <Nav.Link>Filters</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/filters/home">
                  <Nav.Link>Filters Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/filters/about">
                  <Nav.Link>Filters About</Nav.Link>
                </LinkContainer>
                <nav>
                  <ul>
                    <li>
                      <NavLink tag={RouterNavLink} to="/filters">
                        Filters
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Nav>
            </Col>
            <Col md={10}>
              <Switch>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/filters" component={Filters} />
                <Route component={PageNotFound} />
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
