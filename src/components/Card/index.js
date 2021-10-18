import React from 'react'
import Button from '../Button'
import { Wrapper, Image, Title, Description } from './styles'

const Card = ({ title, description, image, url }) => {
  return (
    <Wrapper>
      <Image src={image.file.url} alt={image.description} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button type="textOnly" title="Learn more" />
    </Wrapper>
  )
}

export default Card
