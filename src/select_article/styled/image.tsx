import { CenteredItem } from '../../_styled/grid'
import { ImageBase } from '../../_styled/image'
import { frHeight } from './grid'

export const ImageContainer = CenteredItem.extend`
  grid-area: sa_image;
  height: ${frHeight * 7}vh;
  width: 100%;
`

export const Image = ImageBase
