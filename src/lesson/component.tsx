import { dark2, light2 } from 'colors';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { init } from './actions';
import { SelectOption } from './selectOption';
import { last } from 'rambdax'

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

function Example(store: LessonStore, dispatch: any){
  if(!store.showQuestion) return ''

  return <SelectOption store={store} dispatch={dispatch}/>
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
  public componentDidMount(){
    const tag = last(window.location.href.split('/'))

    this.props.dispatch(init(tag))
  }

  public render() {
    const { lessonStore: store} = this.props
    
    if(!store.ready) return  ''

    const isExample = store.currentStep.example !== undefined

    const Component = isExample ?
      Example(store, this.props.dispatch) :
      Explanation(this.props) 

    return Component
  }
}

const connectComponent = ({ lessonStore }) => ({ lessonStore })

export const LessonWrapped = connect(connectComponent)(Lesson)
