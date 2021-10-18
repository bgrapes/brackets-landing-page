import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'
import { Link } from 'gatsby'

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
`

export const StyledRow = styled(Row)`
  width: 100%;
  max-width: 1200px;
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
`

export const Logo = styled.img`
  width: 100%;
  margin: 0;
  max-width: 124px;
`

export const GatsbyLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`
