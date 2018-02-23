import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  height: 89vh;
  width: 100vw;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "cw_question" "cw_solved" "cw_translation";
`
