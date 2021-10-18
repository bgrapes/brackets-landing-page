import React from 'react'
import { Wrapper, ArrowIcon } from './styles'

const Button = ({ title, type }) => {
  return (
    <Wrapper type={type}>
      {title}{' '}
      <ArrowIcon
        src={type === 'textOnly' ? '/arrow-textOnly.svg' : '/arrow.svg'}
      />
    </Wrapper>
  )
}

export default Button
