import { darkblue7 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'
import styled from 'styled-components'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: translation;
`

export const Translation = styled(Text)`
  color: ${darkblue7};
`
