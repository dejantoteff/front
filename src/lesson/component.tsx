import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

export class Lesson extends React.Component<LessonProps, {}> {
  constructor(props: LessonProps) {
    super(props)
  }
  public componentDidMount(){
    this.props.dispatch(init())
  }
  public render() {
    return <div>
      Lesson
    </div>
  }
}

const connectComponent = ({ lessonStore }) => ({ lessonStore })

export const LessonWrapped = connect(connectComponent)(Lesson)
