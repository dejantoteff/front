import styled from 'styled-components'
import { height, Item } from './grid'

export const ImageContainer = Item.extend`
  grid-area: ws_image;
  text-align: center;
  height: ${7 * height}vh;
  width: 100%;
`

export const Image = styled.img`
  width: auto;
  height: 100%;
`
