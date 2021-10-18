import styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'

export const StyledNavbar = styled(Navbar)`
  z-index: 100;

  @media (min-width: 992px) {
    min-height: 124px;
  }

  .navbar-toggler-icon {
    background-image: url('/menu-icon.svg') !important;
  }
`

export const Logo = styled.img`
  width: 100%;
  margin: 0;
  max-width: 124px;
`

export const NavbarCollapse = styled(Navbar.Collapse)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
`

export const NavLink = styled(Nav.Link)`
  margin-right: 0px;
  color: #fff !important;
  font-size: 14.4px;
  font-weight: 700;
  text-decoration: none;
  padding: 5px 0px !important;
  transition: border-bottom 0.2s;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  @media (min-width: 992px) {
    margin-right: 30px;
  }
`
