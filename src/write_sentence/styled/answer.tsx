import { dark6, green4 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

const color = `color: ${dark6}`
const textDecoration = `text-decoration: solid underline overline ${green4}`

export const AnswerContainer = CenteredItem.extend`
  width: 100%;
  grid-area: ws_answer;
`

export const Answer = Text.extend`
  ${color};
  ${textDecoration};

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerSmall = getText(0.37).extend`
  ${color};
  ${textDecoration};

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerHidden = styled.span`
  visibility: hidden
`

export const AnswerVisible = styled.span`
  visibility: visible
`
