import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  StyledNavbar,
  Logo,
  NavbarCollapse,
  StyledNav,
  NavLink,
} from './styles'
import Button from '../Button'
import formatKey from '../../utils/formatKey'

const NavBar = ({ logo, title, navigationItems, primaryCta }) => {
  return (
    <Grid>
      <Row>
        <StyledNavbar expand="lg" variant="dark">
          <Navbar.Brand href="/">
            {logo && <Logo alt={title} src={logo} />}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse>
            <StyledNav>
              {navigationItems.map((navigationItem, index) => {
                const { title, url } = navigationItem
                const key = `navitem--${formatKey(title)}--${index}`

                return (
                  <NavLink href={url} key={key} data-key={key}>
                    {title}
                  </NavLink>
                )
              })}
            </StyledNav>
            <Button title={primaryCta.title} />
          </NavbarCollapse>
        </StyledNavbar>
      </Row>
    </Grid>
  )
}

export default NavBar
