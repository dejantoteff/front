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

  svg {
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

export const B = CarrierItem.extend`
  grid-area: b;
`

export const C = CarrierItemWithHover.extend`
  margin-top: 22%;
  font-size: 50%;
  text-align: center;
  grid-area: c;
`

export const First = CarrierItem.extend`
  margin-top: 22%;
  grid-area: first;
`

export const AfterFirst = CarrierItemWithHover.extend`
  margin-top: 20%;
  grid-area: afterfirst;
`

export const PreMiddle = CarrierItemWithHover.extend`
  margin-top: 18%;
  grid-area: premiddle;
`

export const Middle = CarrierItemWithHover.extend`
  margin-top: 21%;
  grid-area: middle;
`

export const AfterMiddle = CarrierItemWithHover.extend`
  margin-top: 20%;
  grid-area: aftermiddle;
`

export const X = CarrierItem.extend`
  margin-top: 20%;
  grid-area: x;
`

export const Y = CarrierItemWithHover.extend`
  margin-top: 15%;
  cursor: none;
  font-size: 5vh;
  line-height: 5vh;
  text-decoration: underline;
  text-decoration-color: ${navy5};
  color: ${navy};
  grid-area: y;
`
