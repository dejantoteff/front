// import styled from 'styled-components'
import { ContainerBase } from '../../_styled/grid'

export const Container = ContainerBase.extend`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: ". gw_input ."
  ". gw_sentence ." 
  ". gw_related ." 
  ". gw_image ." 
  ". gw_translated .";
`
