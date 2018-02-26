import styled from 'styled-components'
import { CenteredItem, height } from '../../_styled/grid'

export const InputContainer = CenteredItem.extend`
  grid-area: ws_input;
`

export const Input = styled.div`
  padding-top: ${0.1 * height}vh;
  
  input {
    height: ${0.7 * height}vh;
    font-size: ${0.6 * height}vh;
    text-align: center;
    width: 100%;
  }
`
