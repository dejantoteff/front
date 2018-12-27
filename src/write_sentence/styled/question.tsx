import { dark2, green } from 'colors'
import styled from 'styled-components'
import { background, CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

export const QuestionContainer = styled(CenteredItem)`
  width: 100%;
  grid-area: ws_question;
`

const QuestionBase = `
  color: ${dark2};
  letter-spacing: 0.1em;   

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const Question = styled(Text)`${QuestionBase}`

export const QuestionSmall = styled(getText(0.33))`${QuestionBase}`

export const QuestionMobile = styled(getText(0.2))`
  ${QuestionBase}

  span:not(:first-child) {
    margin-left: 4px;
  }
`

export const QuestionActive = styled.span`
  border: 5px dashed ${green};
`

export const QuestionVisible = styled.span`
  border: 5px dashed ${background};  
  visibility: visible;
`

export const QuestionHidden = styled.span`
  border: 5px dashed ${background};  
  visibility: hidden;
`
