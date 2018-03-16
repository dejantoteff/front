import { navy, navy5 } from 'colors'
import styled from 'styled-components'

// tslint:disable-next-line
const gridAreas = '"a b c first afterfirst premiddle middle aftermiddle prelast last x y z"'

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

export const A = CarrierItem.extend`
  grid-area: a;
`

export function createIconCell(namespace:string){
  const inner = styled.canvas.attrs({
    id: `icon_${namespace}`,
  }) `
    width: 80;
    height: 33;
  `
  
  const outer = styled.div`
    width: 8vw;
    height: 10vh;
    text-align: center;  
    grid-area: ${namespace};
  `

  return {inner, outer}
}

export const B = CarrierItem.extend`
  margin-top: 20%;
  text-align: center;  
  grid-area: b;
`

export const C = B.extend`
  grid-area: c;
`

export const First = B.extend`
  grid-area: first;
`

export const AfterFirst = B.extend`
  grid-area: afterfirst;
`

export const PreMiddle = B.extend`
  grid-area: premiddle;
`

export const Middle = B.extend`
  grid-area: middle;
`

export const AfterMiddle = B.extend`
  grid-area: aftermiddle;
`

export const X = B.extend`
  grid-area: x;
`

export const Y = CarrierItem.extend`
  margin-top: 15%;
  cursor: none;
  font-size: 5vh;
  line-height: 5vh;
  text-decoration: underline;
  text-decoration-color: ${navy5};
  color: ${navy};
  grid-area: y;
`
