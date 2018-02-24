import { dark2 } from 'colors'
import styled from 'styled-components'
import { height, Item, Text } from './grid'

export const QuestionContainer = Item.extend`
  grid-area: question;
`

export const Question = Text.extend`
  color: ${dark2};
  letter-spacing: 0.1em; 
`
