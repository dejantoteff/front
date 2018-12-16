import { bluegrey7, green2 } from 'colors'
import styled from 'styled-components'
import { CenteredItem, Text } from '../../_styled/grid'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: sa_translation;
  outline: solid ${green2};
`

export const Translation = styled(Text)`
  color: ${bluegrey7};
`
