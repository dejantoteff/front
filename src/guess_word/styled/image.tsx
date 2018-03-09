import { CenteredItem, height } from '../../_styled/grid'
import { ImageBase } from '../../_styled/image'
import { getFraction } from './grid'

const containerHeight = getFraction(5)

export const ImageContainer = CenteredItem.extend`
  grid-area: gw_image;
  height: ${containerHeight}vh;
  width: 100%;
`

export const Image = ImageBase
