import { navy, navy5 } from 'colors'
import styled from 'styled-components'

// tslint:disable-next-line
const gridAreas = 'logo info . . refresh random volumedown send stepforward . . . points'

export const Container = styled.div`
  grid-template-areas: "${gridAreas}";
  position: absolute;
  top: 92vh;
  width: 100%;
  height: 8vh;
  left: 0;
  display: grid;
  grid-template-columns: repeat(13, 1fr);

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

export function createIconCell(
  namespace: string,
){
  const size = 40

  const inner = styled.canvas.attrs({
    id: `icon_${namespace}`,
    width: size,
    height: size,
  })``

  const outer = styled.div.attrs({
    className: 'hvr-pulse',
  }) `
    width: 7.8vw;
    height: 8vh;
    text-align: center;  
    grid-area: ${namespace};
  `

  return {inner, outer}
}

export const Points = CarrierItem.extend`
  padding-top: 7%;
  cursor: none;
  font-family: 'Kranky', cursive;
  font-size: 5vh;
  line-height: 5vh;
  color: ${navy};
  grid-area: points;
`
