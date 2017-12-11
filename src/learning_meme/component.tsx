import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen } from './actions'

export class LearningMeme extends React.PureComponent<LearningMemeProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onInput = this.onInput.bind(this)
    this.base = 'learningmeme'
  }

  public onInput(event: any) {
    this.props.dispatch(listen(event))
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return <div className={`${this.base}__container`}>
      {this.props.learningMemeStore.ready && <div className={this.base}>

        <div className={`${this.base}__input--container`}>
          <div className={`${this.base}__input`}>
            <div className={`${this.base}__input--item`}>
              <input
                type='text'
                value={this.props.learningMemeStore.inputState}
                onChange={this.onInput}
                onKeyPress={this.onInput}
              />
            </div>
          </div>
        </div>

        <div className={`${this.base}__question--container`}>
          <div className={`${this.base}__question`}>
            <div className={`${this.base}__question--item`}>

              {this.props.learningMemeStore.listen &&
                <span>{this.props.learningMemeStore.question}</span>}

              {!this.props.learningMemeStore.listen &&
                <span>{this.props.learningMemeStore.currentInstance.deWord}</span>}

            </div>
          </div>
        </div>

        <div className={`${this.base}__sentence--container`}>
          <div className={`${this.base}__sentence`}>
            <div className={`${this.base}__sentence--item`}>

              {!this.props.learningMemeStore.listen &&
                <span>{this.props.learningMemeStore.sentence.hidden}</span>}

              {this.props.learningMemeStore.listen && <span>
                {this.props.learningMemeStore.sentence.visible}</span>}

            </div>
          </div>
        </div>

        <div className={`${this.base}__image--container`}>
          <img
            className={`${this.base}__image--item`}
            src={this.props.learningMemeStore.currentInstance.imageSrc}
          />
        </div>
        <div className={`${this.base}__translation--container`}>
          <div className={`${this.base}__translation`}>
            {this.props.learningMemeStore.currentInstance.enPart}
          </div>
        </div>

      </div>}
    </div>
  }
}

const connectComponent = ({ learningMemeStore }) => ({ learningMemeStore })

export const LearningMemeWrapped = connect(connectComponent)(LearningMeme)