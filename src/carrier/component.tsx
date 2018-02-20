import * as React from 'react'
import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR } from '../constants'
import { randomIcon } from './icons/randomIcon'
import { refreshIcon } from './icons/refreshIcon'
import { sendIcon } from './icons/sendIcon'
import { stepForwardIcon } from './icons/stepForwardIcon'
import { volumeDownIcon } from './icons/volumeDown'
import { Languages } from './languages'

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  private base: string

  constructor(props: Props) {
    super(props)
    this.base = 'carrier'
  }

  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage

    return <div className={`${this.base}__container`}>
      <div className={`${this.base}`}>

        {/* Navigation component */}
        <div className={`${this.base}__a`}>
          <div id='toggle-navigation' className='navigation__logo'></div>
        </div>

        <div className={`${this.base}__b`}>
        </div>

        {/* Display app instructions */}
        <div className={`${this.base}__c`}>

          {this.props.store.instructions}

        </div>

        {/* Change language direction */}
        <div className={`${this.base}__first`}>

          <div id='languagechange' title='Change language direction'>
            {refreshIcon()}
          </div>

          {this.props.store.toggleLanguage &&
            <Languages
              dispatch={this.props.dispatch}
              currentPair={`${from}${LANGUAGE_SEPARATOR}${to}`}
            />}

        </div>

        <div className={`${this.base}__afterfirst`}>

          <div id='random' title='Toggle random order of questions'>
            {randomIcon(this.props.store.randomFlag)}
          </div>

        </div>

        <div className={`${this.base}__premiddle`}>

          <div id='texttospeech' title='Toggle text to speech function'>
            {volumeDownIcon(this.props.store.textToSpeechFlag)}
          </div>

        </div>

        <div className={`${this.base}__middle`}>

          <div id='submit' title='Submit your answer'>
            {sendIcon()}
          </div>

        </div>

        <div className={`${this.base}__aftermiddle`} title='Go to next question'>

          <div id='next'>
            {stepForwardIcon()}
          </div>

        </div>

        <div className={`${this.base}__prelast`}>
        </div>

        <div className={`${this.base}__last`}>

        </div>

        <div className={`${this.base}__y`} title='Your points'>
          {this.props.store.points}
        </div>

      </div>
    </div>
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
