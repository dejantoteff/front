import { darkblue3 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const WordContainer = CenteredItem.extend`
  grid-area: gw_word;
`

export const Word = Text.extend`
  color: ${darkblue3};
  letter-spacing: 0.4rem;
  word-spacing: 1rem;
`
