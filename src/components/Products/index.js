import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Card from '../Card'
import formatKey from '../../utils/formatKey'
import { Wrapper } from './styles'

const Products = ({ products }) => (
  <Wrapper>
    <Grid>
      <Row>
        {products.map((product, index) => {
          const { title, description, image, url } = product
          const key = `product-card--${formatKey(title)}--${index}`

          return (
            <Col xs={12} sm={6} lg={4} key={key} data-key={key}>
              <Card
                title={title}
                description={description.description}
                image={image}
                url={url}
              />
            </Col>
          )
        })}
      </Row>
    </Grid>
  </Wrapper>
)

export default Products
