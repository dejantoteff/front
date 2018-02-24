import { blue, darkblue7 } from 'colors'
import styled from 'styled-components'
export const cellHeight = 25.7

export const Row = styled.div`
  height: ${cellHeight}vh;
`

const Section = styled.div`
text-align: center;
padding-top: ${cellHeight * 0.12}vh;
line-height: ${cellHeight * 0.7}vh;
font-size: ${cellHeight * 0.17}vh;
height: ${cellHeight}vh;
`

export const Container = styled.div`
  display: grid;
  height: 89vh;
  width: 100vw;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "cw_question" "cw_solved" "cw_translation";
`

export const Translation = Section.extend`
color: ${blue};
grid-area: cw_translation;
font-weight: bolder;
`

export const Solved = Section.extend`
color:  ${darkblue7};
grid-area: cw_solved;
`
