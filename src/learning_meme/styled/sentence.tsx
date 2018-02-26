import { dark7 } from 'colors'
import { Item, Text } from './grid'

export const SentenceContainer = Item.extend`
  grid-area: sentence;
`

export const Sentence = Text.extend`
  color: ${dark7};
  padding-top: 0px;
`
