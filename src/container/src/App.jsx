import { Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, NavLink as RouterNavLink } from 'react-router-dom'

// import MicroFrontend from './utils/MicroFrontend'
import MicroFrontend from './utils/MicroFrontendHook'
import Header from './components/Header'
import { Nav, NavLink, NavItem } from 'reactstrap'

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
  return (
    <>
      <MicroFrontend history={history} host="http://localhost:3011" name="Filters" />
    </>
  ) // process.env.MF_FILTERS_HOST
}

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="p-3">
          <Row>
            <Col md={2}>
              <Nav vertical>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/users">
                    Users
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/filters">
                    Filters Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/filters/home">
                    Filters Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/filters/about">
                    Filters About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/filters/users">
                    Filters Users
                  </NavLink>
                </NavItem>
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
        </div>
      </Router>
    </>
  )
}

export default App
