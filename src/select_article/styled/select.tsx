import styled from 'styled-components'
import { frHeight } from './grid';
import { blue, light, dark2 } from 'colors';

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
`

export const Select = styled.li`
  background: ${light};
  cursor: pointer;
  height: ${cellHeight}vh;
  margin-top: ${frHeight * 0.07}vh;
  outline: dashed ${blue};
  text-align: center;
  transition: background 0.33s ease;

  &:hover{
    background: ${dark2};
    color: ${light};
  }
`
