import { darkblue7 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

export const TranslationContainer = CenteredItem.extend`
  grid-area: ws_translation;
  width: 100%;            
`

export const Translation = Text.extend`
  color: ${darkblue7};
`

export const TranslationSmall = getText(0.37).extend`
  color: ${darkblue7};
`
