import styled from 'styled-components'
import { frHeight } from './grid';

export const SelectContainer = styled.ul`
  display:inline-block;
  list-style-type: none;
  height: ${frHeight * 4}vh;
  min-width: 7vw;
  outline: solid pink;
`

export const Select = styled.li`
  outline: solid green;
  text-align: center;
  height: ${frHeight * 0.5}vh;
  padding: ${frHeight * 0.05}vh;
  cursor: pointer;
`
