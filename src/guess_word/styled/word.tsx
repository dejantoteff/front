import { darkblue3 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { frHeight, Text } from './grid'

export const WordContainer = CenteredItem.extend`
  height: ${1 * frHeight}vh;
  grid-area: gw_word;
`

export const Word = Text.extend`
  color: ${darkblue3};
  letter-spacing: 0.4rem;
  word-spacing: 1rem;
`
