import * as React from 'react'

// STYLED_COMPONENTS
import {
  A,
  AfterFirst,
  AfterMiddle,
  C,
  Container,
  First,
  Middle,
  PreMiddle,
  X,
  Y,
} from './styled/grid'

// IMPORTS
import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR } from '../constants'
import { randomIcon } from './icons/randomIcon'
import { refreshIcon } from './icons/refreshIcon'
import { sendIcon } from './icons/sendIcon'
import { stepForwardIcon } from './icons/stepForwardIcon'
import { volumeDownIcon } from './icons/volumeDown'
import { LanguagesComponent } from './languages'

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

    return (
      <Container>

        {/* Navigation component */}
        <A>
          <div id='toggle-navigation' className='navigation__logo'></div>
        </A>

        {/* Display app instructions */}
        <C>
          {this.props.store.instructions}
        </C>

        {/* Change language direction */}
        <First>

          <div id='languagechange' title='Change language direction'>
            {refreshIcon()}
          </div>

          {this.props.store.toggleLanguage &&
            <LanguagesComponent
              dispatch={this.props.dispatch}
              currentPair={`${from}${LANGUAGE_SEPARATOR}${to}`}
            />}

        </First>

        <AfterFirst>

          <div id='random' title='Toggle random order of questions'>
            {randomIcon(this.props.store.randomFlag)}
          </div>

        </AfterFirst>

        <PreMiddle>

          <div id='texttospeech' title='Toggle text to speech function'>
            {volumeDownIcon(this.props.store.textToSpeechFlag)}
          </div>

        </PreMiddle>

        <Middle>

          <div id='submit' title='Submit your answer'>
            {sendIcon()}
          </div>

        </Middle>

        <AfterMiddle title='Go to next question'>

          <div id='next'>
            {stepForwardIcon()}
          </div>

        </AfterMiddle>

        <Y title='Your points'>
          {this.props.store.points}
        </Y>

      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
