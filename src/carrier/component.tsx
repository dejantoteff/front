// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  Container,
  createIconCell,
  LogoCell,
  Points,
} from './styled/grid'

const Info = createIconCell('info')
const Random = createIconCell('random')
const ChangeLanguage = createIconCell('changelanguage', false)
const Submit = createIconCell('submit')
const Next = createIconCell('next')
const TextToSpeech = createIconCell('texttospeech')

// IMPORTS
import * as React from 'react'
import rough from 'roughjs'

import { connect } from 'react-redux'
import { 
  ICON_ACTIVE, 
  ICON_PASSIVE, 
  LANGUAGE_SEPARATOR, 
  LEARNING_MEME, 
} from '../constants'

import { changeLanguagePath } from './icons/changeLanguage'
import { infoPath } from './icons/info'
import { nextPath } from './icons/next'
import { randomPath } from './icons/random'
import { submitPath } from './icons/submit'
import { textToSpeechPath } from './icons/textToSpeech'

import { dark6, teal2 } from 'colors'
import { defaultTo, identity, ifElse, isNil, last } from 'rambdax'
import { LanguagesComponent } from './languages'

const Paths = {
  changeLanguagePath,
  infoPath,
  nextPath,
  randomPath,
  submitPath,
  textToSpeechPath,
}

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  constructor(props: Props){
    super(props)
    this.paint = this.paint.bind(this)
    this.singlePaint = this.singlePaint.bind(this)
  }
  public singlePaint(namespace: string, reverseFlag?: boolean){
    const x = this.props.store.roughData[namespace]
    const domElement = document.getElementById(
      `icon_${namespace.toLowerCase()}`
    )

    if(domElement === null){
      
      return
    }

    const canvasElement = rough.canvas(domElement)

    /**
     * Ugly as this is invoked from shouldComponentUpdate_
     * and therefore the new props are not yet applied
     */
    if (reverseFlag){
      x.active = !x.active
    }

    const roughness = defaultTo(
      0.7,
      x.roughness,
    )
    const fillWeight = defaultTo(
      1,
      x.fillWeight,
    )

    const fill = ifElse(
      isNil,
      () => x.active ? ICON_ACTIVE : ICON_PASSIVE,
      identity,
    )(x.fill)

    const path = Paths[`${namespace}Path`]
    const stroke = dark6

    canvasElement.path(
      path,
      { roughness, fill, fillWeight, stroke },
    )
  }
  public paint(){
    Object.keys(this.props.store.roughData)
      .map(
        namespace => this.singlePaint(namespace),
      )
  }

  /**
   * We need this to catch when one of active-able icons is clicked
   */
  public shouldComponentUpdate(nextProps, nextState, nextContext){
    if (
      this.props.store.roughData.random.active !== nextProps.store.roughData.random.active
    ){
      this.singlePaint('random', true)
    }else if (
      this.props.store.roughData.textToSpeech.active !== nextProps.store.roughData.textToSpeech.active
    ){
      this.singlePaint('textToSpeech', true)
    }

    return true
  }
  public componentDidMount(){
    this.paint()
  }
  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage
    const name = this.props.store.name
    const isHome = last(window.location.href.split('/')) === ''
    const showInfo = name === LEARNING_MEME || isHome
    
    return (
      <Container>

        <LogoCell><Logo id='toggle-navigation' /></LogoCell>

        {
          showInfo &&
          <Info.outer><Info.inner /></Info.outer>
        }

        <ChangeLanguage.outer>
          <ChangeLanguage.inner />
          {
            this.props.store.toggleLanguage &&
            <LanguagesComponent
              dispatch={this.props.dispatch}
              currentPair={`${from}${LANGUAGE_SEPARATOR}${to}`}
            />
          }
        </ChangeLanguage.outer>
        
        <Random.outer><Random.inner /></Random.outer>
        <TextToSpeech.outer><TextToSpeech.inner /></TextToSpeech.outer>
        <Submit.outer><Submit.inner /></Submit.outer>
        <Next.outer><Next.inner /></Next.outer>

        <Points>{this.props.store.points}</Points>
      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
