import { darkblue,light6, green4, red3, bluegrey } from 'colors'
import styled from 'styled-components'
import {opacity } from '../../_helpers/css_in_js/opacity'
import { CenteredWithId } from '../../_styled/grid'
import { getText, Text } from './grid'

const color = `color: ${darkblue};`
const spanColor = `color: ${light6};`
const textDecoration = `border-top: solid 1px ${green4};`
const textDecorationWrong = `border-top: solid 1px ${red3};`

export const AnswerContainer = styled(CenteredWithId('ws_answer'))`
  width: 100%;
  grid-area: ws_answer;
`

const AnswerBase = `
${color}

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
  ${spanColor}
  padding-top: 0.05vh;
  background: ${bluegrey};  
  border-radius: 15%;
  padding-left: 0.6vw;
  padding-right: 0.6vw;
  visibility: hidden;
`

export const AnswerVisible = styled(AnswerHidden)`
  ${opacity()}
  ${textDecoration}
  visibility: visible;
`

export const AnswerVisibleWrong = styled(AnswerVisible)`
  ${textDecorationWrong}
`
