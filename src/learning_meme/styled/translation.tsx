import { darkblue7 } from 'colors'
import { Item, Text } from './grid'

export const TranslationContainer = Item.extend`
  grid-area: translation;
`

export const Translation = Text.extend`
  color: ${darkblue7};
`
