import styled from 'styled-components'

export const height = 8
export const letterSpacing = 0.1

export const Item = styled.div`
  text-align: center;
  height: ${height}vh;
`

export const Text = styled.div`
  padding-top: ${0.3 * height}vh;
  line-height: ${0.5 * height}vh;
  font-size: ${0.5 * height}vh;
  width: 100%;
`

export const Container = styled.div`
  height: 89vh;
  width: 100vw;    
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 1fr 1fr 5fr 1fr;
  grid-template-areas: ". ws_input ." 
  ". ws_question ." 
  ". ws_translation ." 
  ". ws_image .";
`
