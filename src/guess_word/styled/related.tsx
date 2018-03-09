import { grey4, teal2 } from 'colors'
import { CenteredItem } from '../../_styled/grid'
import { Text } from './grid'

export const RelatedContainer = CenteredItem.extend`
  grid-area: gw_related;
  outline: dashed ${teal2};
`

export const Related = Text.extend`
  padding-top: 0;
  text-align:center;
  font-weight: 600;
  color: ${grey4};
`
