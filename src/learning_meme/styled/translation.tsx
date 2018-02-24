import { darkblue7 } from 'colors'
import styled from 'styled-components'
import { Item, Text } from './grid'

export const TranslationContainer = Item.extend`
  grid-area: translation;
`

export const Translation = Text.extend`
  color: ${darkblue7};
  padding-top: 0px;
`
