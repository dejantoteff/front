import { darkblue7 } from 'colors'
import { Item, Text } from './grid'

export const TranslationContainer = Item.extend`
  grid-area: ws_translation;
  width: 100%;            
`

export const Translation = Text.extend`
  color: ${darkblue7};
`
