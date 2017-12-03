import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { toggle } from './actions'

export class LearningMeme extends React.Component<LearningMemeProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    console.log(props, 'nav')
    this.onClick = this.onClick.bind(this)
    this.base = 'learningmeme'
  }

  public onClick() {
    this.props.dispatch(toggle())
  }

  public render() {
    return <div>
      {this.props.learningMemeStore.ready && <div className={this.base}>
        yes
      </div>}

    </div>
  }
}

const connectComponent = ({ learningMemeStore }) => ({ learningMemeStore })

export const LearningMemeWrapped = connect(connectComponent)(LearningMeme)
