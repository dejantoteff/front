// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  A,
  AfterFirst,
  AfterMiddle,
  B,
  C,
  Container,
  First,
  Middle,
  PreMiddle,
  X,
  Y,
} from './styled/grid'

// IMPORTS
import * as React from 'react'
import rough from 'roughjs'

import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoPath, infoIcon } from './icons/info'
import { randomPath, randomIcon } from './icons/random'
import { refreshIcon } from './icons/refresh'
import { sendIcon } from './icons/send'
import { stepForwardIcon } from './icons/stepForward'
import { volumeDownIcon } from './icons/volumeDown'

import { LanguagesComponent } from './languages'

function paint(){
  console.time('prepare')
  const b = rough.canvas(document.getElementById('icon_b'))
  b.path(infoPath, { 
    roughness: 0.7, fill: 'red'
  })
  console.timeEnd('prepare')
  console.time('work')
  const x = rough.canvas(document.getElementById('icon_x'))
  x.path(randomPath, { 
    roughness: 0.3, fill: 'red'
  })
  console.timeEnd('work')
}
/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  componentDidMount(){
    paint()
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
        
        <B>
          <canvas id="icon_b" width="80" height="60"></canvas>
        </B>
        
        <X>
          <canvas id="icon_x" width="80" height="60"></canvas>
        </X>

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
