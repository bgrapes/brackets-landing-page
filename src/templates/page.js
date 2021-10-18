import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import '../css/reset.css'

import Seo from '../components/Seo'
import { GlobalStyle, Wrapper, Inner, Container } from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage')
    const {
      backgroundImage,
      title,
      hero,
      logo,
      navigationItems,
      primaryCta,
      secondaryCta,
      products,
    } = page

    return (
      <Wrapper backgroundImage={backgroundImage.file.url}>
        <Inner>
          <Seo
            title={title}
            description={hero.headline}
            image={`http:${backgroundImage.resize.src}`}
          />
          <GlobalStyle />
          <Header
            logo={logo.file.url}
            title={title}
            navigationItems={navigationItems}
            primaryCta={primaryCta}
          />
          <Container>
            <Hero
              headline={hero.headline}
              subHeadline={hero.subHeadline}
              description={hero.description.description}
              primaryCta={primaryCta}
              secondaryCta={secondaryCta}
            />
            <Products products={products} />
          </Container>
        </Inner>
      </Wrapper>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      logo {
        file {
          url
        }
      }
      backgroundImage {
        file {
          url
        }
        resize {
          src
        }
      }
      navigationItems {
        title
        url
      }
      hero {
        headline
        subHeadline
        description {
          description
        }
      }
      primaryCta {
        title
        url
      }
      secondaryCta {
        title
        url
      }
      products {
        title
        description {
          description
        }
        image {
          file {
            url
          }
          description
        }
        url
      }
    }
  }
`
