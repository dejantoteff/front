import { CenteredItem } from '../../_styled/grid'
import { InputBase } from '../../_styled/input'
import { frHeight } from './grid'

export const InputContainer = CenteredItem.extend`
  height: ${1 * frHeight}vh;
  grid-area: gw_input;
`

export const Input = InputBase.extend`
  input{
    width: 70%;
  }
`
