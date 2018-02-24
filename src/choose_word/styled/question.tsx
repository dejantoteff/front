import { blue, light } from 'colors'
import styled from 'styled-components'
import { cellHeight, Row } from './grid'

const height = cellHeight / 3.15

const smallBorder = '2px'
const largeBorder = '2px'

export const Choice = styled.div`
  line-height: ${height}vh;
  font-size: ${height / 1.5}vh;
  border: ${smallBorder} ridge ${blue};
  background: ${light};
`

export const QuestionContainer = Row.extend`
  grid-area: cw_question;
`

export const Question = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  text-align: center;
  grid-template-areas: '. choicex .' '. choicey .' '. choicez .'; 
`

export const ChoiceX = Choice.extend`
  grid-area: choicex;
`

export const ChoiceY = Choice.extend`
  grid-area: choicey;
  background: ${light};
`

export const ChoiceZ = Choice.extend`
  grid-area: choicez;
  background: ${light};
`
