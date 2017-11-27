import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { toggle } from './actions'
import { chooseWordStore } from './reducers'

export class ChooseWord extends React.Component<ChooseWordProps, {}> {
  private base: string

  constructor(props) {
    super(props)
    console.log(props, 'choose_word')
    this.onButtonClick = this.onButtonClick.bind(this)
    this.base = 'navigation'
  }

  public onButtonClick() {
    this.props.dispatch(toggle())
  }

  public render() {
    return <div>
      <button onClick={this.onButtonClick}>click</button>
      <hr />
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })
const connectComponenta = x => {
  console.log('x1', x)
  return { chooseWordStore: false }
}

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
