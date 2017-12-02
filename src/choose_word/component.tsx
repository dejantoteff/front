import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

export class ChooseWord extends React.Component<ChooseWordProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    console.log(props, 'choose_word')
    this.onButtonClick = this.onButtonClick.bind(this)
    this.base = 'chooseword'
  }

  public onButtonClick() {
    this.props.dispatch(init())
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return <div>
      {this.props.chooseWordStore.ready && <div className={`${this.base}--container`}>

        <div className={`${this.base}--grid`}>

          <div className={`${this.base}--question__container`}>

            <div className={`${this.base}--question`}>

              <div className={`${this.base}--question__choicex`}>
                {this.props.chooseWordStore.question[this.props.chooseWordStore.currentIndex][0]}
              </div>

              <div className={`${this.base}--question__choicey`}>
                {this.props.chooseWordStore.question[this.props.chooseWordStore.currentIndex][1]}
              </div>

              <div className={`${this.base}--question__choicez`}>
                {this.props.chooseWordStore.question[this.props.chooseWordStore.currentIndex][2]}
              </div>
            </div>
          </div>

          <div className={`${this.base}--content`}>
            1
          </div>

          <div className={`${this.base}--footer`}>

            {this.props.chooseWordStore.correctAnswer[
              this.props.chooseWordStore.currentIndex
            ]}
            <hr />
            {this.props.chooseWordStore.currentInstance.enPart}

          </div>

        </div>

      </div>}
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
