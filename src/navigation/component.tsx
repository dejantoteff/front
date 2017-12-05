import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { toggle } from './actions'

export class Navigation extends React.Component<NavigationProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.base = 'navigation'
  }

  public onClick() {
    this.props.dispatch(toggle())
  }

  public render() {
    return <div>
      {this.props.navigationStore.active && <div className={this.base}>
        nav
      </div>}

    </div>
  }
}

const connectComponent = ({ navigationStore }) => ({ navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
