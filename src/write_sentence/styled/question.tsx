import { dark2, green } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const QuestionContainer = CenteredItem.extend`
  width: 100%;
  grid-area: ws_question;
`

export const Question = Text.extend`
  color: ${dark2};
  letter-spacing: 0.1em;   
`

export const QuestionActive = styled.span`
  border: 1px dashed ${green};
  margin-left: 15px;
`

export const QuestionPending = styled.span`
  margin-left: 15px;
`
