import { grey4 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const RelatedContainer = CenteredItem.extend`
  grid-area: gw_related;
`

export const Related = Text.extend`
  text-align:center;
  font-weight: 600;
  color: ${grey4};
`
