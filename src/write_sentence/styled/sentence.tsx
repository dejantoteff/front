import { dark7 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'

export const SentenceContainer = CenteredItem.extend`
  width: 100%;
  grid-area: ws_sentence;
`

export const Sentence = Text.extend`
  color: ${dark7};
`

export const SentenceSmall = getText(0.37).extend`
  color: ${dark7};
`
