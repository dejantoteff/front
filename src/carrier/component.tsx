import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'

export class Carrier extends React.Component<Props, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    console.log(props, 'carrier')
    this.onButtonClick = this.onButtonClick.bind(this)
    this.base = 'carrier'
  }

  public onButtonClick() {
  }

  public render() {
    return <div className={`${this.base}--container`}>
      <div className={`${this.base}--first`}>2
      </div>
      <div className={`${this.base}--last`}>M
      <button onClick={this.onButtonClick}>click</button>
      <button id='x'>click2</button>
      </div>
    </div>
  }
}

const connectComponent = ({ store, chooseWordStore }) => ({ store,chooseWordStore })

export const CarrierWrapped = connect(connectComponent)(Carrier)
