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
      {this.props.navigationStore.active && <div className={`${this.base}__container`}>
        <div className={`${this.base}`}>
          <div className={`${this.base}__item`}>
            1
          </div>
          <div className={`${this.base}__item`}>
            2
          </div>
          <div className={`${this.base}__item`}>
            3
          </div>
        </div>
      </div>}

    </div>
  }
}

const connectComponent = ({ navigationStore }) => ({ navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
