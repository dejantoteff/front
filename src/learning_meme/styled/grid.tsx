import { blue6, pink } from 'colors'
import styled from 'styled-components'

/**
 * this file should be used as a main source of truth
 * that is why here are declared pattern components_
 * such as `Item` and `Text`
 */
export const height = 8

export const Item = styled.div`
  text-align: center;
  height: ${height}vh;
`

export const Text = styled.div`
  padding-top: ${height * 0.3}vh;
  line-height: ${height * 0.5}vh;
  font-size: ${height * 0.43}vh;
  width: 100%;
`

/**
 * No need to namespace this grid areas
 * as always that could be skipped for_
 * one element of the pattern
 */
export const Container = styled.div`
  height: 89vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 4fr 1fr;
  grid-template-areas: ". input ."
  ". question ." 
  ". sentence ." 
  ". image ." 
  ". translation .";
  
  span.fromWord {
    color: ${blue6};
  }
  span.toWord {
    margin-left: 1vw;
    color: ${pink};
  }
`
