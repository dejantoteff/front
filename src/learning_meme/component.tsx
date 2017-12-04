import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init, setInput } from './actions'

export class LearningMeme extends React.Component<LearningMemeProps, {}> {
  private base: string
  private imageSrc: string

  constructor(props: any) {
    super(props)
    console.log(props, 'nav')
    this.onInput = this.onInput.bind(this)
    this.base = 'learningmeme'
    this.imageSrc = 'https://i.imgur.com/6sVkwTf.jpg'
  }

  public onInput(event) {
    if (event.key === 'Enter') {
      // check answer
    } else {
      this.props.dispatch(setInput(event.target.value))
    }
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
                autoFocus={true}
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
              {this.props.learningMemeStore.question}
            </div>
          </div>
        </div>

        <div className={`${this.base}__sentence--container`}>
          <div className={`${this.base}__sentence`}>
            <div className={`${this.base}__sentence--item`}>

              {!this.props.learningMemeStore.listen && <span>{this.props.learningMemeStore.sentence.hidden}</span>}

              {this.props.learningMemeStore.listen && <span>{this.props.learningMemeStore.sentence.visible}</span>}

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
