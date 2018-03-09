import styled from 'styled-components'

export const height = 8
export const totalHeight = 90
export const background = '#b0bec5'

function getFractionFn(
  numberFractions: number,
  fraction: number,
): number {

  return (totalHeight / numberFractions) * fraction
}

function getSubFractionFn(
  numberFractions: number,
  child: number,
  parrent: number,
): number {

  return getFractionFn(numberFractions, parrent) / child
}

export function fractionGetters(numberFractions: number): FractionGetters{
  const getFraction = (fraction: number) =>
    getFractionFn(numberFractions, fraction)

  const getSubFraction = (
    child: number,
    parrent: number,
  ) => getSubFractionFn(numberFractions, child, parrent)

  return {getFraction, getSubFraction}
}

export const ContainerBase = styled.div`
  height: 90vh;
  width: 100vw;    
  display: grid;
`

export const CenteredItem = styled.div`
  text-align: center;
  height: ${height}vh;
`
