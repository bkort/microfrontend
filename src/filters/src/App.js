import { Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
  return <h2>Filters Home</h2>
}

function About() {
  return <h2>Filters About</h2>
}

function Users() {
  return <h2>Filters Users</h2>
}

function filters404() {
  return <h2>404 - Page Not Found (Filters)</h2>
}

const App = () => {
  return (
    <>
      <Router>
        <div className="p-3">
          <Nav>
            <LinkContainer to="/filters/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/filters/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/filters/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
          </Nav>
          <Switch>
            <Route path="/filters/about">
              <About />
            </Route>
            <Route path="/filters/users">
              <Users />
            </Route>
            <Route path="/filters/home">
              <Home />
            </Route>
            <Route component={filters404} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
