import styled from 'styled-components'
import { ContainerBase, height } from '../../_styled/grid'

export const Text = styled.div`
  padding-top: ${0.3 * height}vh;
  line-height: ${0.5 * height}vh;
  font-size: ${0.5 * height}vh;
  width: 100%;
`

export const Container = ContainerBase.extend`
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 1fr 1fr 5fr 1fr;
  grid-template-areas: ". ws_input ." 
  ". ws_question ." 
  ". ws_translation ." 
  ". ws_image .";
`
