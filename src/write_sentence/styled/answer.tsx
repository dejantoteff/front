import { darkblue, green4, red3 } from 'colors'
import styled from 'styled-components'
import {opacity } from '../../_helpers/css_in_js/opacity'
import { CenteredWithId } from '../../_styled/grid'
import { getText, Text } from './grid'

const color = `color: ${darkblue};`
const textDecoration = `border-top: solid 1px ${green4};`
const textDecorationWrong = `border-top: solid 1px ${red3};`

export const AnswerContainer = styled(CenteredWithId('ws_answer'))`
  width: 100%;
  grid-area: ws_answer;
`

const AnswerBase = `
${color}
letter-spacing: 0.1em;   

span:not(:first-child) {
  margin-left: 6px;
}
`

export const Answer = styled(Text)`
  ${AnswerBase}
`

export const AnswerSmall = styled(getText(0.37))`
  ${AnswerBase}
`

export const AnswerMobile = styled(getText(0.2))`
  ${AnswerBase}
  span:not(:first-child) {
    margin-left: 4px;
  }
`
export const AnswerHidden = styled.span`
  padding-top: 0.05vh;  
  padding-left: 0.6vw;
  padding-right: 0.6vw;
  visibility: hidden
`

export const AnswerVisible = styled(AnswerHidden)`
  visibility: visible;
  ${opacity()}
  ${textDecoration}
`

export const AnswerVisibleWrong = styled(AnswerVisible)`
  ${textDecorationWrong}
`
