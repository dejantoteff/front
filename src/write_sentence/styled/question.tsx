import { dark2, green } from 'colors'
import styled from 'styled-components'
import { Item, letterSpacing, Text } from './grid'

export const QuestionContainer = Item.extend`
  width: 100%;
  grid-area: ws_question;
`

export const Question = Text.extend`
  color: ${dark2};
  letter-spacing: ${letterSpacing}em;   
`

export const QuestionActive = styled.span`
  letter-spacing: ${letterSpacing}em;   
  border: 1px dashed ${green};
  margin-left: 15px;
`

export const QuestionPending = styled.span`
  letter-spacing: ${letterSpacing}em;   
  padding-left: 15px;
`
