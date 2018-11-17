import { light7 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'
import styled from 'styled-components'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: ws_translation;
  width: 100%;            
`

export const Translation =  styled(Text)`
  color: ${light7};
`

export const TranslationSmall = styled(getText(0.37))`
  color: ${light7};
`
