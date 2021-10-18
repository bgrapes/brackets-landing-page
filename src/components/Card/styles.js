import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 240px;
  margin-bottom: 25px;
  padding: 25px;

  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
`

export const Image = styled.img`
  position: relative;
  align-self: flex-end;
  right: 0;
  top: 25%;
  height: 222px;

  @media (min-width: 1024px) {
    right: -15%;
    top: 25%;
  }
`

export const Title = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const Description = styled.p`
  color: #000;
  font-size: 14.4px;
  font-weight: 400;
`
