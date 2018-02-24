import styled from 'styled-components'
import { height, Item } from './container'

export const ImageContainer = Item.extend`
  grid-area: image;
  text-align: center;
  height: ${height * 7};
  width: 100%;
`

export const ImageItem = styled.div`
  width: auto;
  height: 100%;
`
