import { dark5, green, navy5 } from 'colors'
import styled from 'styled-components'

const height = 8

/**
 * Parrent element that each navigation link will use
 */
const Cell = styled.div`
  outline: 1px solid ${green};
  text-align: center;
  height: ${height}vh;
  background-color: ${navy5};
  color: ${dark5};

  a {
      text-decoration: none;
      color: inherit;
  }

  a:hover {
      color: inherit;
  }
  &:hover {
      color: ${navy5};
      background-color: ${dark5};
  }
  span {
      display: inline-block;
      vertical-align: middle;
      line-height: ${height}vh;
  }
`

export function CCell(area: string) {

  return Cell.extend`grid-area: ${area};`
}
