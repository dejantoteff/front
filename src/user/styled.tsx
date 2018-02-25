import { blue } from 'colors'
import styled from 'styled-components'

const height = 8
const totalHeight = 89

const Cell = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  font-size: 1.05rem;
`

export const Container = styled.div`
  height: ${totalHeight}vh;
  display: grid;
  grid-template-columns: auto 20rem auto;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: ". u_top ." ". u_content .";
  
  input {
    width: 100%;
    padding-left: 0.3rem;
  }

  button {
    width: 50%;
  }
`
