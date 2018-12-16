import { dark7 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const SentenceContainer = styled(CenteredItem)`
  grid-area: sentence;
`

export const Sentence = styled(Text)`
  color: ${dark7};
  padding-top: 0px;
`
