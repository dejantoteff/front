import { CenteredItem } from '../../_styled/grid'
import { InputBase } from '../../_styled/input'

export const InputContainer = CenteredItem.extend`
  grid-area: gw_input;
`

export const Input = InputBase.extend`
  input{
    width: 70%;
  }
`
