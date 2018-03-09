import { CenteredItem, height } from '../../_styled/grid'
import { ImageBase } from '../../_styled/image'
import { frHeight, getFraction } from './grid'

export const ImageContainer = CenteredItem.extend`
  grid-area: gw_image;
  height: ${5 * frHeight}vh;
  width: 100%;
`

export const Image = ImageBase
