import styled from 'styled-components'
import { height, Item } from './container'

export const InputContainer = Item.extend`
  grid-area: input;
`

export const Input = styled.div`
  padding-top: ${0.1 * height}vh;
  input {
      height: ${0.7 * height}vh;
      font-size: ${0.5 * height}vh;
      text-align: center;
      width: 100%
  }
`
