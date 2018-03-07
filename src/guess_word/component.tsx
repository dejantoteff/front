import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

export class GuessWord extends React.Component<GuessWordProps, {}> {
  constructor(props: GuessWordProps) {
    super(props)
  }
  public componentDidMount(){
    this.props.dispatch(init())
  }
  public render() {
    return <div>
      GuessWord
    </div>
  }
}

const connectComponent = ({ store, guessWordStore }) => ({ store, guessWordStore })

export const GuessWordWrapped = connect(connectComponent)(GuessWord)
