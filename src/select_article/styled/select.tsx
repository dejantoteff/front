import { blue, blue7, green3, light, light3, navy4, red7 } from 'colors'
import styled from 'styled-components'
import { frHeight } from './grid'

/**
 * Because row `sa_word` is 10fr
 */
const height = frHeight * 10

/**
 * 7 instead of 6 because of margin
 */
const cellHeight = height / 7

export const SelectContainer = styled.ul`
  display:inline-block;
  height: ${height}vh;
  list-style-type: none;
  margin: 0 10px;
  min-width: 7vw;
  li.selectable_correct{
    color: ${light3};
    background: ${green3};
  }
  li.selectable_wrong{
    color: ${light3};
    background: ${red7};    
  }
  li.selectable_inactive{
    color: ${light3};
    background: ${blue7};    
  }
`

export const Select = styled.li`
  background: ${light};
  cursor: pointer;
  height: ${cellHeight}vh;
  line-height: ${cellHeight}vh;
  font-size: ${cellHeight / 2}vh;
  margin-top: ${frHeight * 0.07}vh;
  outline: double ${blue};
  text-align: center;
  transition: background 0.12s ease-in;

  &:hover{
    background: ${navy4};
  }
`
