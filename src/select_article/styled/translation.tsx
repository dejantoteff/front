import { bluegrey7, green2 } from 'colors'
import { CenteredItem, Text } from '../../_styled/grid'
import styled from 'styled-components'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: sa_translation;
  outline: solid ${green2};
`

export const Translation = styled(Text)`
  color: ${bluegrey7};
`
