import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

function Example(props: LessonProps){
  return <div>example</div>
}

function Explanation(props: LessonProps){
  return <div>example</div>
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
