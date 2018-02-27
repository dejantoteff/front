import { dark2 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const QuestionContainer = CenteredItem.extend`
  grid-area: question;
`

export const Question = Text.extend`
  color: ${dark2};
  letter-spacing: 0.1em; 
`
