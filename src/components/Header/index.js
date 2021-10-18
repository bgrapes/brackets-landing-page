import React from 'react'
import Navigation from '../Navigation'
import { Container } from '../Layout'
import { Wrapper, StyledRow, Inner, Logo, GatsbyLink } from './styles'

const Header = ({ logo, title, navigationItems, primaryCta }) => {
  return (
    <Wrapper data-key="wrapper">
      <StyledRow data-key="row">
        <Container data-key="container">
          <Inner data-key="inner">
            <GatsbyLink to="/">
              {logo && <Logo alt={title} src={logo} />}
            </GatsbyLink>
            <Navigation
              navigationItems={navigationItems}
              primaryCta={primaryCta}
            />
          </Inner>
        </Container>
      </StyledRow>
    </Wrapper>
  )
}

export default Header
