import { LinkContainer } from 'react-router-bootstrap'
import { NavLink as BNavLink } from 'react-bootstrap'

export const NavLink = ({ to = '/', children = 'Default' }) => {
  return (
    <LinkContainer to={to} exact={to === '/'}>
      <BNavLink>{children}</BNavLink>
    </LinkContainer>
  )
}

export const Link = ({ to = '/', children = 'Default' }) => {
  return (
    <LinkContainer to={to} exact={to === '/'}>
      <BNavLink>{children}</BNavLink>
    </LinkContainer>
  )
}
