import { CenteredItem, height } from '../../_styled/grid'
import { ImageBase } from '../../_styled/image'
import { frHeight } from './grid';

export const ImageContainer = CenteredItem.extend`
  grid-area: sa_image;
  height: ${frHeight * 5}vh;
  width: 100%;
`

export const Image = ImageBase
