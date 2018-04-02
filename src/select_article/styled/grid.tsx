import { blue6, pink } from 'colors'
import styled from 'styled-components'
import { ContainerBase, height, fractionGetters } from '../../_styled/grid'

export const Text = styled.div`
  padding-top: ${height * 0.3}vh;
  line-height: ${height * 0.5}vh;
  font-size: ${height * 0.43}vh;
  width: 100%;
`

const numberFractions = 14
const gutterHeight = 0

const { getFraction } = fractionGetters(
  numberFractions,
  gutterHeight,
)

/**
 * Value of 1 fraction(1fr) in `vh`
 */
export const frHeight = getFraction(1)

export const Container = ContainerBase.extend`
  grid-template-columns: 1fr 12fr 1fr;
  grid-template-rows: 1fr 6fr 1fr 5fr 1fr;
  grid-template-areas: ". . ."
  ". sa_words ."
  ". . ."
  ". sa_image ." 
  ". sa_translation .";
`
