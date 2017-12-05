import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen } from './actions';

const isLastCharSpace = (str:string): boolean =>{
  const lastChar = str[str.length - 1]
  
  return lastChar === ' '
}

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.base = 'writesentence'
  }

  componentDidMount(){
    this.props.dispatch(init())
  }

  public onInputKeyPress(event) {
    if(event.key===' '){

      this.props.dispatch(listen('SPACE'))
    }
  }
  public onInputChange(event) {
    if(!isLastCharSpace(event.target.value)){

      this.props.dispatch(listen(event.target.value))
    }
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
                onChange={this.onInputChange}
                onKeyPress={this.onInputKeyPress}
              />
            </div>
          </div>
        </div>

        <div className={`${this.base}__question--container`}>
          <div className={`${this.base}__question`}>
            <div className={`${this.base}__question--item`}>

            {this.props.writeSentenceStore.question.map((questionInstance, i) => {
              const className = i === this.props.writeSentenceStore.index ?
                'active' :
                'pending'

              const prop = i < this.props.writeSentenceStore.index ?
                'hidden'  :
                'visible' 

              return <span className={`${this.base}__question--${className}`} key={i}>
                {this.props.writeSentenceStore.question[i][prop]}
              </span>
            })}

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
