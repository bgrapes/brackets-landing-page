import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const Logo = styled.img`
  width: 100%;
  max-width: 124px;
`

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItem = styled(Nav.Link)`
  margin-right: 30px;
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
`
