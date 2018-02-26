import { dark2, green } from 'colors'
import styled from 'styled-components'
import { background, CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

export const QuestionContainer = CenteredItem.extend`
  width: 100%;
  grid-area: ws_question;
`

export const Question = Text.extend`
  color: ${dark2};
  letter-spacing: 0.1em;   

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const QuestionSmall = getText(0.33).extend`
  color: ${dark2};
  letter-spacing: 0.1em;   

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const QuestionActive = styled.span`
  border: 1px dashed ${green};
`

export const QuestionVisible = styled.span`
  border: 1px dashed ${background};  
  visibility: visible;
`

export const QuestionHidden = styled.span`
  border: 1px dashed ${background};  
  visibility: hidden;
`
