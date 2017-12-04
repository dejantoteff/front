import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions';

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onInput = this.onInput.bind(this)
    this.base = 'writesentence'
  }

  componentDidMount(){
    this.props.dispatch(init())
  }

  public onInput() {
  }
  public render() {
    return <div className={`${this.base}__container`}>
      {this.props.writeSentenceStore.ready && <div className={this.base}>

        <div className={`${this.base}__input--container`}>
          <div className={`${this.base}__input`}>
            <div className={`${this.base}__input--item`}>
              <input
                type='text'
                value={this.props.writeSentenceStore.inputState}
                onChange={this.onInput}
                onKeyPress={this.onInput}
              />
            </div>
          </div>
        </div>

        <div className={`${this.base}__question--container`}>
          <div className={`${this.base}__question`}>
            <div className={`${this.base}__question--item`}>

    x

            </div>
          </div>
        </div>

        <div className={`${this.base}__image--container`}>
          <img
            className={`${this.base}__image--item`}
            src={this.props.writeSentenceStore.currentInstance.imageSrc}
          />
        </div>
        <div className={`${this.base}__translation--container`}>
          <div className={`${this.base}__translation`}>
            {this.props.writeSentenceStore.currentInstance.enPart}
          </div>
        </div>

      </div>}
    </div>
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
