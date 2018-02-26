import { dark6 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const AnswerContainer = CenteredItem.extend`
  width: 100%;
  grid-area: ws_answer;
`

export const Answer = Text.extend`
  color: ${dark6};

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
