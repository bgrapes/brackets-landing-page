import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import Button from '../Button'
import {
  Wrapper,
  SubHeadline,
  Headline,
  Description,
  CallsToAction,
} from './styles'

const Hero = ({
  headline,
  subHeadline,
  description,
  primaryCta,
  secondaryCta,
}) => (
  <Grid>
    <Row center="xs" start="sm">
      <Wrapper>
        <SubHeadline>{subHeadline}</SubHeadline>
        <Headline>{headline}</Headline>
        <Description>{description}</Description>
        <CallsToAction>
          <Button title={primaryCta.title} />
          <Button title={secondaryCta.title} type="secondary" />
        </CallsToAction>
      </Wrapper>
    </Row>
  </Grid>
)

export default Hero
