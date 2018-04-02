import { CenteredItem, Text } from '../../_styled/grid'
import { frHeight } from './grid'
import { bluegrey7, red, green2 } from 'colors'

export const TranslationContainer = CenteredItem.extend`
  grid-area: sa_translation;
`

export const Translation = Text.extend`
  color: ${bluegrey7};
  text-decoration: ${green2} underline;
`
