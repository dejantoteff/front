import './style.less'

import * as React from 'react'
import {connect} from 'react-redux'
import { toggle } from './actions'

export class Navigation extends React.Component<NavigationProps, {}> {
  private base: string
  
  constructor(props) {
    super(props)
    console.log(props, 'nav')
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
      {this.props.store.inventory}
    </div>
  }
}

const connectComponent = ({ store, navigationStore }) => ({ store, navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)