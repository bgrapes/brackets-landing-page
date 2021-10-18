import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 340px;
  align-items: center;

  @media (min-width: 576px) {
    align-items: flex-start;
    min-height: 425px;
  }
`

export const SubHeadline = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 25px;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`

export const Headline = styled.h1`
  color: #fff;
  font-size: 42px;
  font-weight: 700;
  max-width: 370px;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 56px;
    max-width: 470px;
    text-align: left;
  }
`

export const Description = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`

export const CallsToAction = styled.div`
  display: flex;
`
