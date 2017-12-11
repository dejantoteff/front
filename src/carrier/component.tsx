import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { randomIcon } from './icons/randomIcon'
import { volumeDownIcon } from './icons/volumeDown';
import { sendIcon } from './icons/sendIcon'
import { stepForwardIcon } from './icons/stepForwardIcon'

export class Carrier extends React.PureComponent<Props, {}> {
  private base: string

  constructor(props: Props) {
    super(props)
    this.base = 'carrier'
  }

  public render() {
    return <div className={`${this.base}__container`}>
      <div className={`${this.base}`}>

        <div className={`${this.base}__a`}>
          <div id='toggle-navigation' className='navigation__logo'></div>
        </div>

        <div className={`${this.base}__first`}>

          <div id='random'>
            {randomIcon(this.props.store.randomFlag)}
          </div>  

        </div>

        <div className={`${this.base}__afterfirst`}>

          <div id='texttospeech'>
            {volumeDownIcon(this.props.store.textToSpeechFlag)}
          </div>  

        </div>

        <div className={`${this.base}__premiddle`}>
          {this.props.store.instructions}
        </div>

        <div className={`${this.base}__middle`}>

          <div id='submit'>
            {sendIcon()}
          </div>

        </div>

        <div className={`${this.base}__aftermiddle`}>

        <div id='next'>
            {stepForwardIcon()}
          </div>

        </div>

        <div className={`${this.base}__prelast`}>
        </div>

        <div className={`${this.base}__last`}>

        </div>

        <div className={`${this.base}__y`}>
          {this.props.store.points}
        </div>

      </div>
    </div>
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
