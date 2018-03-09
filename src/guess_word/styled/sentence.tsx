import { dark7 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const SentenceContainer = CenteredItem.extend`
  grid-area: gw_sentence;
`

export const Sentence = Text.extend`
  color: ${dark7};
  padding-top: 0px;
`
