import { darkblue7 } from 'colors'
import { Item, Text } from './grid'

export const TranlsationContainer = Item.extend`
  grid-area: ws_translation;
  width: 100%;            
`

export const Tranlsation = Text.extend`
  color: ${darkblue7};
`
