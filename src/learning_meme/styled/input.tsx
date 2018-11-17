import { CenteredItem } from '../../_styled/grid'
import { InputBase } from '../../_styled/input'
import styled from 'styled-components'

export const InputContainer = styled(CenteredItem)`
  grid-area: input;
`

export const Input = styled(InputBase)`
  input{
    width: 70%;
  }
`
