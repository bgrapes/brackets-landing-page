import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Button from '../Button'
import { NavItem } from './styles'
import formatKey from '../../utils/formatKey'

import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = ({ logo, title, navigationItems, primaryCta }) => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav role="navigation" aria-label="Main">
          {navigationItems.map((navigationItem, index) => {
            const { title, url } = navigationItem
            const key = `navitem--${formatKey(title)}--${index}`

            return (
              <NavItem key={key} data-key={key} href={url}>
                {title}
              </NavItem>
            )
          })}
        </Nav>
        <Button title={primaryCta.title} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
