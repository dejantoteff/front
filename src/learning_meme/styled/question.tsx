import { dark2 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'
import styled from 'styled-components'

export const QuestionContainer = styled(CenteredItem)`
  grid-area: question;
`

export const Question = styled(Text)`
  color: ${dark2};
  letter-spacing: 0.1em; 
`
