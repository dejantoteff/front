import { dark6, green4, red3 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

const color = `color: ${dark6}`
const textDecoration = `text-decoration: solid underline overline ${green4}`
const textDecorationWrong = `text-decoration: solid underline overline ${red3}`

export const AnswerContainer = styled(CenteredItem)`
  width: 100%;
  grid-area: ws_answer;
`

export const Answer = styled(Text)`
  ${color};

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerSmall = styled(getText(0.37))`
  ${color};

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerHidden = styled.span`
  visibility: hidden
`

export const AnswerVisible = styled.span`
  ${textDecoration};
  visibility: visible;
`

export const AnswerVisibleWrong = styled.span`
  ${textDecorationWrong};
  visibility: visible;
`
