import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'

export class Carrier extends React.Component<Props, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    console.log(props, 'carrier')
    this.base = 'carrier'
  }

  public render() {
    return <div className={`${this.base}`}>
      <div className={`${this.base}--x`}>
      </div>
      <div className={`${this.base}--first`}>first
      </div>
      <div className={`${this.base}--afterfirst`}>afterfirst
      </div>

      <div className={`${this.base}--premiddle`}>
        {this.props.store.instructions}
      </div>
      <div className={`${this.base}--middle`}>
        <button id='middle'>middle</button>
      </div>
      <div className={`${this.base}--aftermiddle`}>
        <button id='next'>next</button>
      </div>

      <div className={`${this.base}--prelast`}>
        <button id='prelast'>prelast</button>
      </div>

      <div className={`${this.base}--last`}>
        <div className={`${this.base}--last`}>
          {this.props.store.points}
        </div>
      </div>

    </div>
  }
}

const connectComponent = ({ store, chooseWordStore }) => ({ store, chooseWordStore })

export const CarrierWrapped = connect(connectComponent)(Carrier)
