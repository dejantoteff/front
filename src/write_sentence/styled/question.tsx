import { dark2, green } from 'colors'
import styled from 'styled-components'
import { background, CenteredItem } from '../../_styled/grid'
import { getText } from './grid'

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

export const Question = styled(getText(0.5))`${QuestionBase}`

export const QuestionSmall = styled(getText(0.3))`${QuestionBase}`

export const QuestionMobile = styled(getText(0.25))`
  ${QuestionBase}

  span:not(:first-child) {
    margin-left: 4px;
  }
`

export const QuestionActive = styled.span`
  border: 0.5vh dashed ${green};
  border-bottom: 0.5vh solid ${background};
  border-left: 0.5vh solid ${background};
  border-right: 0.5vh solid ${background};
  padding: 0.5vh;
`

export const QuestionVisible = styled.span`
  padding: 0.5vh;
  border: 5px solid ${background};  
  visibility: visible;
`

export const QuestionHidden = styled.span`
  padding: 0.5vh;
  border: 5px solid ${background};  
  visibility: hidden;
`
