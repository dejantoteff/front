import './style.less'

import * as React from 'react'
import { Link } from 'react-router-dom'
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
          <div className={`${this.base}__item--first`}>
            <span><Link to='/write-sentence'>Write Sentence</Link></span>
          </div>
          <div className={`${this.base}__item--second`}>
            <span><Link to='/learning-meme'>Learning Meme</Link></span>
          </div>
          <div className={`${this.base}__item--third`}>
            <span><Link to='/choose-word'>Choose Word</Link></span>
          </div>
        </div>
      </div>}

    </div>
  }
}

const connectComponent = ({ navigationStore }) => ({ navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
