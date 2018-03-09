import { grey4, teal2 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { frHeight, Text } from './grid'

export const RelatedContainer = CenteredItem.extend`
  height: ${2 * frHeight}vh;
  grid-area: gw_related;
  outline: dashed ${teal2};
`

export const Related = Text.extend`
  text-align:center;
  font-weight: 600;
  color: ${grey4};
`
