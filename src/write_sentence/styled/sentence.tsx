import { dark7 } from 'colors'
import { Item, Text } from './grid'

export const SentenceContainer = Item.extend`
  width: 100%;
  grid-area: ws_sentence;
`

export const Sentence = Text.extend`
  color: ${dark7};
`
