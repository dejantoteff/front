import { darkblue3 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { frHeight, Text } from './grid'
import styled from 'styled-components'

export const WordContainer = styled(CenteredItem)`
  height: ${1 * frHeight}vh;
  grid-area: gw_word;
`

export const Word = styled(Text)`
  color: ${darkblue3};
  letter-spacing: 0.4rem;
  word-spacing: 1rem;
`
