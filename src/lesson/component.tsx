import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'
import styled from 'styled-components'
import { dark2, light2 } from 'colors';

const ExplanationContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
  grid-row-gap: 5%;
  height: 89vh;
  
`

const ExplanationTitle = styled.div`
  text-align: center;
  font-size: 4vh;
  padding-top: 3vh;
  background: ${dark2};
  color: ${light2};
`

const ExplanationText = styled.div`
  font-size: 3vh;
  padding: 3vh;
`


function Example(props: LessonProps){
  return <div>example</div>
}

function Explanation(props: LessonProps){
  const {title, text} = props.lessonStore.currentStep
  function createMarkup() { return {__html: text}; }
  return (
    <ExplanationContainer>
      <ExplanationTitle>{title}</ExplanationTitle>
      <ExplanationText 
        dangerouslySetInnerHTML={createMarkup()}
      />
    </ExplanationContainer>
  )
}

export class Lesson extends React.Component<LessonProps, {}> {
  constructor(props: LessonProps) {
    super(props)
  }
  public componentDidMount(){
    this.props.dispatch(init())
  }
  public render() {
    const {
      ready,
      isExample
    } = this.props.lessonStore

    if(!ready){
      return  ''
    }


    const Component = isExample ?
      Example(this.props) :
      Explanation(this.props) 

    return Component
  }
}

const connectComponent = ({ lessonStore }) => ({ lessonStore })

export const LessonWrapped = connect(connectComponent)(Lesson)
