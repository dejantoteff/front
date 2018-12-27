import { darkblue, green4, red3 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

const color = `color: ${darkblue};`

const textDecoration = `border-top: solid 1px ${green4};`
const textDecorationWrong = `border-top: solid 1px ${red3};`

export const AnswerContainer = styled(CenteredItem)`
  width: 100%;
  grid-area: ws_answer;
`

export const Answer = styled(Text)`
  ${color}

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerSmall = styled(getText(0.37))`
  ${color}

  span:not(:first-child) {
    margin-left: 6px;
  }
`

export const AnswerHidden = styled.span`
  visibility: hidden
`

export const AnswerVisible = styled.span`
  padding-top: 0.05vh;
  visibility: visible;
  ${textDecoration}
`

export const AnswerVisibleWrong = styled(AnswerVisible)`
  ${textDecorationWrong}
`
