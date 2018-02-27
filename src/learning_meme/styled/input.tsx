import styled from 'styled-components'
import { CenteredItem, height } from '../../_styled/grid'
import { InputBase } from '../../_styled/input'

export const InputContainer = CenteredItem.extend`
  grid-area: input;
`

export const Input = InputBase.extend`
  input{
    width: 70%;
  }
`
