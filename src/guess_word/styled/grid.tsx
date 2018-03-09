import styled from 'styled-components'
import { ContainerBase, fractionGetters } from '../../_styled/grid'

const numberFractions = 10
const gutterHeight = 4

export const Container = ContainerBase.extend`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  grid-template-rows: 1fr 1fr 2fr 5fr 1fr;
  grid-row-gap: 1vh;
  grid-template-areas: ". gw_input ."
  ". gw_sentence ." 
  ". gw_related ." 
  ". gw_image ." 
  ". gw_translated .";
`

const {getFraction, getSubFraction} = fractionGetters(
  numberFractions,
  gutterHeight,
)

/**
 * Value of 1 fraction(1fr) in `vh`
 */
export const frHeight = getFraction(1)

export const Text = styled.div`
  padding-top: ${0.3 * frHeight}vh;
  line-height: ${0.5 * frHeight}vh;
  font-size: ${0.43 * frHeight}vh;
  width: 100%;
`
