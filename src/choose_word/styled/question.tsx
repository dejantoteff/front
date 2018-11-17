import { blue, light } from 'colors'
import styled from 'styled-components'
import { cellHeight, Row } from './grid'

const height = cellHeight / 3.15

const smallBorder = '2px'

export const Choice = styled.div`
  line-height: ${height}vh;
  font-size: ${height / 1.5}vh;
  border: ${smallBorder} ridge ${blue};
  background: ${light};
  cursor: pointer;
`

export const QuestionContainer = styled(Row)`
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

export const ChoiceX = styled(Choice)`
  grid-area: choicex;
`

export const ChoiceY = styled(Choice)`
  grid-area: choicey;
  background: ${light};
`

export const ChoiceZ = styled(Choice)`
  grid-area: choicez;
  background: ${light};
`
