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
    return <div className={`${this.base}__container`}>
      {this.props.learningMemeStore.ready && <div className={this.base}>

        <div className={`${this.base}__input--container`}>
          <div className={`${this.base}__input`}>
            <div className={`${this.base}__input--item`}>
              <input type='text' />
            </div>
          </div>
        </div>

        <div className={`${this.base}__question--container`}>question</div>
        <div className={`${this.base}__image--container`}>image</div>
        <div className={`${this.base}__translation--container`}>translation</div>

      </div>}
    </div>
  }
}

const connectComponent = ({ learningMemeStore }) => ({ learningMemeStore })

export const LearningMemeWrapped = connect(connectComponent)(LearningMeme)
