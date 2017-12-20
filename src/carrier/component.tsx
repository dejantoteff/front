import * as React from 'react'
import { connect } from 'react-redux'
import { randomIcon } from './icons/randomIcon'
import { refreshIcon } from './icons/refreshIcon'
import { sendIcon } from './icons/sendIcon'
import { stepForwardIcon } from './icons/stepForwardIcon'
import { volumeDownIcon } from './icons/volumeDown'
/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 *
 * @export
 * @class Carrier
 * @extends {React.PureComponent<Props, {}>}
 */
export class Carrier extends React.PureComponent<Props, {}> {
  private base: string

  constructor(props: Props) {
    super(props)
    this.base = 'carrier'
  }

  public render() {
    return <div className={`${this.base}__container`}>
      <div className={`${this.base}`}>

        {/* Navigation component */}
        <div className={`${this.base}__a`}>
          <div id='toggle-navigation' className='navigation__logo'></div>
        </div>

        {/* Change language direction */}
        <div className={`${this.base}__c`}>

          <div id='languagechange'>
            {refreshIcon()}
          </div>

        </div>

        {/* Display app instructions */}
        <div className={`${this.base}__first`}>

          {this.props.store.instructions}

        </div>

        <div className={`${this.base}__afterfirst`}>

          <div id='random'>
            {randomIcon(this.props.store.randomFlag)}
          </div>

        </div>

        <div className={`${this.base}__premiddle`}>

          <div id='texttospeech'>
            {volumeDownIcon(this.props.store.textToSpeechFlag)}
          </div>

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
