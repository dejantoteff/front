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

          <div className={`${this.base}--grid--item`}></div>
          <div className={`${this.base}--grid--item`}></div>
          <div className={`${this.base}--grid--item`}>

            <div className={`${this.base}--enpart`}>
              {this.props.chooseWordStore.currentInstance.enPart}
            </div>
          </div>
        </div>

      </div>}
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
