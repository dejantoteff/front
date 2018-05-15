import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'
import styled from 'styled-components'

const ExplanationContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
  grid-row-gap: 100px;
  grid-gap: 100px;
`

const ExplanationTitle = styled.div`
  outline: solid green;
`

const ExplanationText = styled.div`
  outline: solid pink;
`


function Example(props: LessonProps){
  return <div>example</div>
}

function Explanation(props: LessonProps){
  const {title, text} = props.lessonStore.currentStep
  return (
    <ExplanationContainer>
      <ExplanationTitle>{title}</ExplanationTitle>
      <ExplanationText>{text}</ExplanationText>
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
