import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'

export class Carrier extends React.Component<Props, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.base = 'carrier'
  }

  public render() {
    return <div className={`${this.base}__container`}>
      <div className={`${this.base}`}>
        <div className={`${this.base}__x`}>
          <div id='toggle-navigation' className='navigation__logo'></div>
        </div>

        <div className={`${this.base}__first`}>
        </div>

        <div className={`${this.base}__afterfirst`}>
          <button id='texttospeech'>texttospeech</button>
        </div>

        <div className={`${this.base}__premiddle`}>
          {this.props.store.instructions}
        </div>

        <div className={`${this.base}__middle`}>
          <button id='showanswer'>show answer</button>
        </div>

        <div className={`${this.base}__aftermiddle`}>
          <button id='submit'>submit</button>
        </div>

        <div className={`${this.base}__prelast`}>
          <button id='next'>next</button>
        </div>

        <div className={`${this.base}__last`}>
          <div className={`${this.base}__last`}>
            <button id='bookmark'>bookmark</button>
          </div>
        </div>

        <div className={`${this.base}__y`}>
          Points: {this.props.store.points}
        </div>

      </div>
    </div>
  }
}

const connectComponent = ({ store, chooseWordStore }) => ({ store, chooseWordStore })

export const CarrierWrapped = connect(connectComponent)(Carrier)
