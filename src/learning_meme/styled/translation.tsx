import { darkblue7 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: translation;
`

export const Translation = styled(Text)`
  color: ${darkblue7};
`
