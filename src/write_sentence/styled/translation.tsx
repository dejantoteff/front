import { light7, dark2 } from 'colors'
import styled from 'styled-components'
import { CenteredItem } from '../../_styled/grid'
import { getText, Text } from './grid'
import { glue } from 'rambdax'

export const TranslationContainer = styled(CenteredItem)`
  grid-area: ws_translation;
  width: 100%;            
`

const textShaddow = glue(`
  text-shadow:
  -1px -1px 0 ${dark2},
  1px -1px 0 ${dark2},
  -1px 1px 0 ${dark2},
  1px 1px 0 ${dark2};
`)

export const Translation =  styled(Text)`
  color: ${light7};
  ${textShaddow}
`

export const TranslationSmall = styled(getText(0.37))`
  color: ${light7};
  ${textShaddow}
`
