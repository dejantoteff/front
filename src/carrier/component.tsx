import * as React from 'react'

// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  A,
  AfterFirst,
  AfterMiddle,
  C,
  Container,
  First,
  Middle,
  PreMiddle,
  Y,
} from './styled/grid'

// IMPORTS
import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoIcon } from './icons/info'
import { randomIcon } from './icons/random'
import { refreshIcon } from './icons/refresh'
import { sendIcon } from './icons/send'
import { stepForwardIcon } from './icons/stepForward'
import { volumeDownIcon } from './icons/volumeDown'

import { LanguagesComponent } from './languages'

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage
    const name = this.props.store.name

    return (
      <Container>

        {/* Navigation component */}
        <A>
          <Logo id='toggle-navigation' />
        </A>

        {/* Display app instructions */}
        {
          name === LEARNING_MEME &&
          <C>
            <div
              id='info'
              title='Help'
            >
              {infoIcon()}
            </div>
          </C>
        }

        {/* Change language direction */}
        <First>
          <div
            className='hvr-pulse'
            id='languagechange'
            title='Change language direction'
          >
            {refreshIcon()}
          </div>

          {
            this.props.store.toggleLanguage &&
            <LanguagesComponent
              dispatch={this.props.dispatch}
              currentPair={`${from}${LANGUAGE_SEPARATOR}${to}`}
            />
          }
        </First>

        <AfterFirst>
          <div
            id='random'
            title='Toggle random order of questions'
          >
            {randomIcon(this.props.store.randomFlag)}
          </div>
        </AfterFirst>

        <PreMiddle>
          <div
            id='texttospeech'
            title='Toggle text to speech function'
          >
            {volumeDownIcon(this.props.store.textToSpeechFlag)}
          </div>
        </PreMiddle>

        <Middle>
          <div
            id='submit'
            title='Submit your answer'
          >
            {sendIcon()}
          </div>
        </Middle>

        <AfterMiddle>
          <div
            id='next'
            title='Go to next question'
          >
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
