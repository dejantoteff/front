import styled from 'styled-components'
import { height, Item } from './grid'

export const ImageContainer = Item.extend`
  grid-area: image;
  text-align: center;
  height: ${height * 7}vh;
  width: 100%;
`

export const Image = styled.img`
  width: auto;
  height: 100%;
`
