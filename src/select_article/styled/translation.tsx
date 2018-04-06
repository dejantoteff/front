import { bluegrey7, green2 } from 'colors'
import { CenteredItem, Text } from '../../_styled/grid'
import { frHeight } from './grid'

export const TranslationContainer = CenteredItem.extend`
  grid-area: sa_translation;
  outline: solid ${green2};
`

export const Translation = Text.extend`
  color: ${bluegrey7};
`
