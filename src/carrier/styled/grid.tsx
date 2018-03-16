import { navy, navy5 } from 'colors'
import styled from 'styled-components'

// tslint:disable-next-line
const gridAreas = '"logo . info . refresh mic volumedown send stepforward . . . points"'

export const Container = styled.div`
  grid-template-areas: ${gridAreas};
  position: absolute;
  top: 90vh;
  width: 100%;
  height: 10vh;
  left: 0;
  display: grid;
  grid-column: repeat(13, 1fr);

  svg, canvas {
    cursor: pointer;
  }
`

const CarrierItem = styled.div`
  width: 8vw;
  height: 10vh;
`

const CarrierItemWithHover = styled.div.attrs({
  className: 'hvr-pulse',
}) `
  width: 8vw;
  height: 10vh;
`

export const LogoCell = CarrierItem.extend`
  grid-area: logo;
`

export function createIconCell(namespace: string){
  const inner = styled.canvas.attrs({
    id: `icon_${namespace}`,
    width: 40,
    height: 40
  })``

  const outer = styled.div`
    margin-top: 7%;
    width: 8vw;
    height: 10vh;
    text-align: center;  
    grid-area: ${namespace};
  `

  return {inner, outer}
}

export const Points = CarrierItem.extend`
  margin-top: 15%;
  cursor: none;
  font-size: 5vh;
  line-height: 5vh;
  text-decoration: underline;
  text-decoration-color: ${navy5};
  color: ${navy};
  grid-area: points;
`
