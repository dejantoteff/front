import styled from 'styled-components'
import { frHeight } from './grid';
import { blue, blue7, light, light3, dark2, green3, red7 } from 'colors';

const height = frHeight * 4

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
  font-size: ${cellHeight/2}vh;
  margin-top: ${frHeight * 0.07}vh;
  outline: double ${blue};
  text-align: center;
  transition: background 0.33s ease;

  &:hover{
    background: ${dark2};
    color: ${light};
  }
`
