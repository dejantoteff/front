import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

export class ChooseWord extends React.Component<ChooseWordProps, {}> {
  private base: string

  constructor(props) {
    super(props)
    console.log(props, 'choose_word')
    this.onButtonClick = this.onButtonClick.bind(this)
    this.base = 'navigation'
  }

  public onButtonClick() {
    this.props.dispatch(init())
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return <div>
      <button onClick={this.onButtonClick}>click</button>
      <hr />
    </div>
  }
}

const connectComponent = ({ chooseWordStore, store }) => ({ chooseWordStore, store })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
