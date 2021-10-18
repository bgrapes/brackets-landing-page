import styled, { createGlobalStyle } from 'styled-components'
import 'typeface-inter'

export const GlobalStyle = createGlobalStyle`
  html {
    padding: env(safe-area-inset);
  }

  html, body, #___gatsby, #gatsby-focus-wrapper, main {
    height: 100%;
  }

  body {
    font-family: inter, sans-serif;
    background-color: #000;
  }
`

export const Wrapper = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 40%;
  height: 100%;

  /* Dark overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 1;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
`
