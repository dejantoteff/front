import {css, keyframes} from 'styled-components'

const frames = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const opacity = (x = 0.3) => css`animation: ${frames} ${x}s ease-in;`
